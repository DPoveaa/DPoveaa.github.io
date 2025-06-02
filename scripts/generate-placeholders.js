import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create directory if it doesn't exist
const ensureDirectoryExists = (dirPath) => {
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
};

// Generate a random color from a blue/purple palette
const getRandomColor = () => {
  const colors = [
    '#3b82f6', '#4f46e5', '#6366f1', '#8b5cf6', '#a855f7',
    '#2563eb', '#4338ca', '#4f46e5', '#7c3aed', '#9333ea'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Create an SVG placeholder with project name
const createSvgPlaceholder = (projectName, width = 800, height = 600) => {
  const bgColor = '#1e293b';
  const textColor = '#ffffff';
  const accentColor = getRandomColor();
  
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <circle cx="${width * 0.8}" cy="${height * 0.2}" r="${Math.min(width, height) * 0.1}" fill="${accentColor}" opacity="0.6"/>
    <circle cx="${width * 0.2}" cy="${height * 0.8}" r="${Math.min(width, height) * 0.15}" fill="${accentColor}" opacity="0.4"/>
    <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.min(width, height) * 0.07}" font-weight="bold" fill="${textColor}">Projeto</text>
    <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.min(width, height) * 0.05}" fill="${textColor}">${projectName}</text>
    <text x="50%" y="90%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.min(width, height) * 0.03}" fill="${textColor}" opacity="0.7">Portfolio de Daniel Povea</text>
    <text x="50%" y="95%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.min(width, height) * 0.025}" fill="${accentColor}">POVEA</text>
  </svg>`;
};

// List of project images to create
const projectImages = [
  { name: 'placeholder-project', title: 'Placeholder' },
  { name: 'projeto-tarefas', title: 'Gerenciamento de Tarefas' },
  { name: 'projeto-tarefas-1', title: 'Tarefas - Dashboard' },
  { name: 'projeto-tarefas-2', title: 'Tarefas - Kanban' },
  { name: 'projeto-tarefas-3', title: 'Tarefas - Relatórios' },
  { name: 'projeto-cursos', title: 'Portal de Cursos' },
  { name: 'projeto-cursos-1', title: 'Cursos - Aulas' },
  { name: 'projeto-cursos-2', title: 'Cursos - Certificados' },
  { name: 'projeto-financas', title: 'Finanças Pessoais' },
  { name: 'projeto-financas-1', title: 'Finanças - Dashboard' },
  { name: 'projeto-financas-2', title: 'Finanças - Relatórios' },
  { name: 'projeto-financas-3', title: 'Finanças - Projeções' },
  { name: 'projeto-financas-4', title: 'Finanças - Orçamento' },
  { name: 'projeto-ecommerce', title: 'E-commerce Artesanal' },
  { name: 'projeto-ecommerce-1', title: 'E-commerce - Produtos' },
  { name: 'projeto-ecommerce-2', title: 'E-commerce - Vendas' }
];

// Ensure the images directory exists
const imagesDir = join(__dirname, '..', 'public', 'assets', 'images');
ensureDirectoryExists(imagesDir);

// Generate and save all SVG files
projectImages.forEach(project => {
  const svg = createSvgPlaceholder(project.title);
  const filePath = join(imagesDir, `${project.name}.svg`);
  writeFileSync(filePath, svg);
  console.log(`Created placeholder: ${filePath}`);
});

console.log('All placeholder images have been generated successfully!');