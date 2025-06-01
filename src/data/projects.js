export const projects = [
  {
    id: 1,
    title: 'Sistema de Gerenciamento de Tarefas',
    description: 'Um aplicativo completo para gerenciamento de tarefas com funcionalidades de arrastar e soltar, categorias personalizáveis, e filtros avançados. Desenvolvido com React e TypeScript, utiliza Context API para gerenciamento de estado e uma arquitetura modular para facilitar manutenção.\n\nImplementei autenticação de usuários, persistência de dados com Firebase, e recursos de colaboração em tempo real. O sistema permite que equipes organizem tarefas em quadros Kanban, definam prioridades e prazos, e monitorem o progresso através de gráficos interativos.',
    thumbnail: '/assets/images/projeto-tarefas.svg',
    images: [
      '/assets/images/projeto-tarefas-1.svg',
      '/assets/images/projeto-tarefas-2.svg',
      '/assets/images/projeto-tarefas-3.svg',
    ],
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Context API'],
    categories: ['frontend', 'fullstack'],
    features: [
      'Interface de arrastar e soltar para gerenciar tarefas',
      'Temas claro e escuro personalizáveis',
      'Filtros avançados por status, prioridade e prazo',
      'Gráficos de desempenho e produtividade',
      'Notificações e lembretes por email',
      'Colaboração em tempo real para equipes'
    ],
    link: 'https://task-manager-demo.app',
    repository: 'https://github.com/DPoveaa/task-manager',
    codeSnippets: [
      {
        title: 'Hook personalizado para drag and drop',
        language: 'javascript',
        code: `import { useState, useEffect } from 'react';

const useDragAndDrop = (initialItems, onItemMove) => {
  const [items, setItems] = useState(initialItems);
  const [draggedItem, setDraggedItem] = useState(null);
  
  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  const handleDragStart = (item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e, targetListId) => {
    e.preventDefault();
    // Implementação do drag over
  };

  const handleDrop = (e, targetListId) => {
    e.preventDefault();
    
    if (draggedItem) {
      const newItems = [...items];
      // Lógica para mover o item entre listas
      const sourceList = newItems.find(list => list.id === draggedItem.listId);
      const targetList = newItems.find(list => list.id === targetListId);
      
      // Remove do lugar original
      sourceList.tasks = sourceList.tasks.filter(task => task.id !== draggedItem.id);
      
      // Adiciona ao novo lugar
      targetList.tasks.push({...draggedItem, listId: targetListId});
      
      setItems(newItems);
      setDraggedItem(null);
      
      if (onItemMove) {
        onItemMove(draggedItem.id, targetListId);
      }
    }
  };

  return { items, handleDragStart, handleDragOver, handleDrop };
};

export default useDragAndDrop;`
      },
      {
        title: 'Componente de Gráfico de Progresso',
        language: 'jsx',
        code: `import React, { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { useTheme } from '../hooks/useTheme';

const ProgressChart = ({ tasks }) => {
  const { theme } = useTheme();
  
  const chartData = useMemo(() => {
    const completed = tasks.filter(task => task.status === 'completed').length;
    const inProgress = tasks.filter(task => task.status === 'in-progress').length;
    const pending = tasks.filter(task => task.status === 'pending').length;
    
    return {
      labels: ['Concluído', 'Em Progresso', 'Pendente'],
      datasets: [
        {
          data: [completed, inProgress, pending],
          backgroundColor: [
            'rgba(34, 197, 94, 0.8)',  // Verde para concluído
            'rgba(59, 130, 246, 0.8)', // Azul para em progresso
            'rgba(249, 115, 22, 0.8)', // Laranja para pendente
          ],
          borderColor: [
            'rgb(34, 197, 94)',
            'rgb(59, 130, 246)',
            'rgb(249, 115, 22)',
          ],
          borderWidth: 1,
        },
      ],
    };
  }, [tasks]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: theme === 'dark' ? '#1f2937' : '#fff',
        titleColor: theme === 'dark' ? '#fff' : '#111827',
        bodyColor: theme === 'dark' ? '#d1d5db' : '#4b5563',
        borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
          color: theme === 'dark' ? '#9ca3af' : '#4b5563',
        },
        grid: {
          color: theme === 'dark' ? 'rgba(75, 85, 99, 0.2)' : 'rgba(209, 213, 219, 0.2)',
        },
      },
      x: {
        ticks: {
          color: theme === 'dark' ? '#9ca3af' : '#4b5563',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className={theme === 'dark' ? 'bg-gray-800 p-4 rounded-xl' : 'bg-white p-4 rounded-xl shadow-md'}>
      <h3 className="text-lg font-semibold mb-4">Progresso das Tarefas</h3>
      <div>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ProgressChart;`
      }
    ]
  },
  {
    id: 2,
    title: 'Portal de Cursos Online',
    description: 'Plataforma completa para cursos online com reprodução de vídeos, sistema de avaliação, e certificados digitais. Desenvolvido com React, Node.js e MongoDB, oferece uma experiência interativa para estudantes e professores.\n\nO sistema inclui um dashboard personalizado para alunos acompanharem seu progresso e para instrutores gerenciarem conteúdos e analisarem o desempenho de suas aulas. Implementei um algoritmo de recomendação que sugere cursos baseados no histórico e preferências do usuário.',
    thumbnail: '/assets/images/projeto-cursos.svg',
    images: [
      '/assets/images/projeto-cursos-1.svg',
      '/assets/images/projeto-cursos-2.svg',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Socket.IO'],
    categories: ['backend', 'fullstack'],
    features: [
      'Reprodução de vídeos com controles avançados',
      'Sistema de avaliação e feedback',
      'Certificados digitais com verificação',
      'Painel administrativo para instrutores',
      'Integração com meios de pagamento',
      'Algoritmo de recomendação de cursos'
    ],
    link: 'https://eduportal-demo.app',
    repository: 'https://github.com/DPoveaa/edu-portal',
    codeSnippets: [
      {
        title: 'API de autenticação com JWT',
        language: 'javascript',
        code: `const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { validateRegistration, validateLogin } = require('../middleware/validators');

// Registro de usuário
router.post('/register', validateRegistration, async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    
    // Verifica se o usuário já existe
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'Usuário já existe' });
    }

    // Cria novo usuário
    user = new User({
      name,
      email,
      password,
      role: role || 'student'
    });

    // Hash da senha
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    // Gera JWT
    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '24h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
});

// Login de usuário
router.post('/login', validateLogin, async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verifica se o usuário existe
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Credenciais inválidas' });
    }

    // Verifica senha
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Credenciais inválidas' });
    }

    // Gera JWT
    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '24h' },
      (err, token) => {
        if (err) throw err;
        res.json({ 
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
          }
        });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router;`
      }
    ]
  },
  {
    id: 3,
    title: 'Aplicativo de Finanças Pessoais',
    description: 'Aplicativo para controle financeiro pessoal com gráficos de análise, categorização automática de despesas e projeções financeiras. Desenvolvido usando React Native para proporcionar uma experiência nativa em dispositivos iOS e Android.\n\nO aplicativo sincroniza dados na nuvem e oferece recursos offline para garantir acesso às informações em qualquer situação. Implementei reconhecimento de padrões para sugerir melhorias nos hábitos financeiros do usuário.',
    thumbnail: '/assets/images/projeto-financas.svg',
    images: [
      '/assets/images/projeto-financas-1.svg',
      '/assets/images/projeto-financas-2.svg',
      '/assets/images/projeto-financas-3.svg',
      '/assets/images/projeto-financas-4.svg',
    ],
    technologies: ['React Native', 'Redux', 'Firebase', 'D3.js', 'Machine Learning'],
    categories: ['mobile', 'frontend'],
    features: [
      'Dashboard interativo com visão geral financeira',
      'Categorização automática de transações',
      'Gráficos e relatórios personalizados',
      'Projeções financeiras baseadas em histórico',
      'Notificações de orçamentos e metas',
      'Sincronização entre múltiplos dispositivos'
    ],
    link: 'https://finapp-demo.app',
    repository: 'https://github.com/DPoveaa/fin-app',
    codeSnippets: [
      {
        title: 'Hook para categorização automática de despesas',
        language: 'javascript',
        code: `import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { categorizeTransaction } from '../utils/mlUtils';
import { updateTransaction } from '../redux/actions/transactionActions';

export const useAutoCategorize = (transaction) => {
  const [suggestedCategory, setSuggestedCategory] = useState(null);
  const [confidence, setConfidence] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const categories = useSelector(state => state.categories.items);
  const pastTransactions = useSelector(state => state.transactions.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const categorize = async () => {
      if (!transaction || transaction.category || isProcessing) return;
      
      setIsProcessing(true);
      
      try {
        // Utiliza machine learning para categorizar com base em transações anteriores
        const result = await categorizeTransaction(
          transaction.description,
          transaction.amount,
          pastTransactions,
          categories
        );
        
        setSuggestedCategory(result.category);
        setConfidence(result.confidence);
      } catch (error) {
        console.error('Erro na categorização automática:', error);
      } finally {
        setIsProcessing(false);
      }
    };
    
    categorize();
  }, [transaction, categories, pastTransactions]);

  const acceptSuggestion = () => {
    if (suggestedCategory && transaction) {
      dispatch(updateTransaction({
        ...transaction,
        category: suggestedCategory
      }));
      setSuggestedCategory(null);
    }
  };

  const rejectSuggestion = () => {
    setSuggestedCategory(null);
  };

  return { 
    suggestedCategory,
    confidence,
    isProcessing,
    acceptSuggestion,
    rejectSuggestion
  };
};`
      }
    ]
  },
  {
    id: 4,
    title: 'E-commerce de Produtos Artesanais',
    description: 'Plataforma de e-commerce especializada em produtos artesanais, com sistema de avaliações, filtros avançados e área do vendedor. Construída com React, MySQL e Express, oferece uma experiência de compra personalizada.\n\nDesenvolvido para dar visibilidade a artesãos locais, o sistema conta com integração a gateways de pagamento, cálculo de frete em tempo real e ferramentas de análise para vendedores acompanharem o desempenho de seus produtos.',
    thumbnail: '/assets/images/projeto-ecommerce.svg',
    images: [
      '/assets/images/projeto-ecommerce-1.svg',
      '/assets/images/projeto-ecommerce-2.svg',
    ],
    technologies: ['React', 'MySQL', 'Express', 'Node.js', 'Redis', 'Docker'],
    categories: ['fullstack', 'backend'],
    features: [
      'Sistema de busca e filtros avançados',
      'Avaliações e comentários de produtos',
      'Painel de controle para vendedores',
      'Integração com múltiplos meios de pagamento',
      'Sistema de recomendações personalizado',
      'Gestão de estoque em tempo real'
    ],
    repository: 'https://github.com/DPoveaa/artisan-market',
  }
];