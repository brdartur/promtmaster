export interface PromptTemplate {
  id: string;
  title: string;
  category: 'Marketing' | 'Coding' | 'Business' | 'Writing' | 'Productivity' | 'Image Gen';
  description: string;
  content: string;
  tags: string[];
}

export const PROMPT_LIBRARY: PromptTemplate[] = [
  // MARKETING
  {
    id: 'm1',
    title: 'Генератор контент-плана',
    category: 'Marketing',
    description: 'Создает детальный план постов на месяц с темами и форматами.',
    tags: ['SMM', 'Strategy', 'Planning'],
    content: "Ты — профессиональный SMM-стратег. Создай контент-план на месяц для [ОПИСАНИЕ БРЕНДА/ПРОДУКТА]. Целевая аудитория: [ОПИСАНИЕ ЦА]. \n\nТребования:\n1. Формат: Таблица (Неделя, День, Тема поста, Формат (Reels/Post/Story), Краткая идея).\n2. Чередуй продающий, развлекательный и образовательный контент (схема 20/40/40).\n3. Темы должны быть виральными и актуальными."
  },
  {
    id: 'm2',
    title: 'AIDA Copywriting Framework',
    category: 'Marketing',
    description: 'Написание продающего текста по классической формуле AIDA.',
    tags: ['Copywriting', 'Sales', 'Framework'],
    content: "Ты — эксперт по копирайтингу. Напиши продающий текст для [ПРОДУКТ] используя формулу AIDA (Attention, Interest, Desire, Action).\n\n- Attention: Захвати внимание провокационным вопросом.\n- Interest: Приведи факты или боли аудитории.\n- Desire: Покажи, как продукт решает проблему.\n- Action: Четкий призыв к действию (CTA).\n\nTone of Voice: [ЖЕЛАЕМЫЙ ТОН]."
  },
  {
    id: 'm3',
    title: 'SEO-оптимизированная статья',
    category: 'Marketing',
    description: 'Генерирует структуру и текст статьи с ключевыми словами.',
    tags: ['SEO', 'Blog', 'Long-read'],
    content: "Напиши SEO-оптимизированную статью на тему: '[ТЕМА СТАТЬИ]'.\nКлючевые слова для включения: [СПИСОК КЛЮЧЕЙ].\n\nСтруктура:\n1. H1 Заголовок (кликбейтный, но честный).\n2. Введение с хуком.\n3. 3-4 раздела с H2 подзаголовками.\n4. FAQ блок (3 вопроса).\n5. Заключение."
  },

  // CODING
  {
    id: 'c1',
    title: 'Объясни код как новичку',
    category: 'Coding',
    description: 'Разбор сложного участка кода простым языком.',
    tags: ['Learning', 'Debugging'],
    content: "Объясни, что делает этот код, шаг за шагом, как будто мне 10 лет. Используй простые аналогии. В конце укажи возможные проблемы или места для оптимизации.\n\nКод:\n```\n[ВСТАВИТЬ КОД]\n```"
  },
  {
    id: 'c2',
    title: 'Генерация Unit-тестов',
    category: 'Coding',
    description: 'Создает покрытие тестами для функции.',
    tags: ['Testing', 'QA', 'Automation'],
    content: "Ты — Senior QA Engineer. Напиши Unit-тесты для следующей функции, используя [БИБЛИОТЕКА ТЕСТИРОВАНИЯ, НАПРИМЕР JEST]. Покрой не только успешные сценарии, но и граничные случаи (edge cases) и обработку ошибок.\n\nФункция:\n```\n[ВСТАВИТЬ КОД]\n```"
  },
  {
    id: 'c3',
    title: 'Рефакторинг и Чистый Код',
    category: 'Coding',
    description: 'Улучшает читаемость и производительность кода.',
    tags: ['Refactoring', 'Clean Code'],
    content: "Проведи рефакторинг этого кода, следуя принципам Clean Code и SOLID. \n1. Улучши имена переменных.\n2. Разбей большие функции.\n3. Добавь комментарии там, где логика неочевидна.\n4. Оптимизируй производительность, если возможно.\n\nКод:\n```\n[ВСТАВИТЬ КОД]\n```"
  },

  // BUSINESS
  {
    id: 'b1',
    title: 'SWOT-анализ продукта',
    category: 'Business',
    description: 'Стратегический анализ сильных и слабых сторон.',
    tags: ['Strategy', 'Analysis', 'Startup'],
    content: "Проведи SWOT-анализ для [НАЗВАНИЕ КОМПАНИИ/ПРОДУКТА]. \nОтрасль: [ОТРАСЛЬ].\n\nВыведи результат в виде Markdown таблицы.\nПосле таблицы напиши 3 стратегические рекомендации, как использовать Сильные стороны (Strengths) для нивелирования Угроз (Threats)."
  },
  {
    id: 'b2',
    title: 'Холодное письмо (Cold Outreach)',
    category: 'Business',
    description: 'Письмо для первого контакта с потенциальным клиентом.',
    tags: ['Sales', 'Email', 'B2B'],
    content: "Напиши холодное письмо потенциальному клиенту [ИМЯ/ДОЛЖНОСТЬ] из компании [КОМПАНИЯ].\nНаша цель: Продать [НАШ ПРОДУКТ].\nГлавная польза для них: [ПОЛЬЗА].\n\nПисьмо должно быть коротким (до 150 слов), персонализированным и не выглядеть как спам. Закончи вопросом, на который легко ответить."
  },
  {
    id: 'b3',
    title: 'Симуляция переговоров',
    category: 'Business',
    description: 'Тренировка сложных переговоров с ИИ.',
    tags: ['Negotiation', 'Roleplay', 'Soft Skills'],
    content: "Давай сыграем в ролевую игру. Ты — скептически настроенный клиент, который считает, что наши услуги слишком дорогие. Я — менеджер по продажам.\n\nТвоя задача: приводить жесткие аргументы против цены.\nМоя задача: убедить тебя.\n\nНачни диалог с фразы: 'Я посмотрел ваше предложение, цена абсолютно неадекватная'."
  },

  // WRITING
  {
    id: 'w1',
    title: 'Редактор текста (Улучшение стиля)',
    category: 'Writing',
    description: 'Превращает черновик в чистовой, профессиональный текст.',
    tags: ['Editing', 'Style', 'Proofreading'],
    content: "Действуй как профессиональный редактор. Перепиши следующий текст, чтобы он звучал более [СТИЛЬ: Убедительно / Лаконично / Эмоционально].\nИсправь грамматические ошибки, убери тавтологии и 'воду'. Сохрани исходный смысл.\n\nТекст:\n[ВСТАВИТЬ ТЕКСТ]"
  },
  {
    id: 'w2',
    title: 'Генератор заголовков',
    category: 'Writing',
    description: 'Создает 10 вариантов виральных заголовков.',
    tags: ['Headlines', 'YouTube', 'Blog'],
    content: "Придумай 10 вариантов заголовков для статьи/видео на тему: [ТЕМА].\n\nИспользуй разные подходы:\n- Вопрос\n- 'Как сделать...'\n- Списки (ТОП-5...)\n- Провокация\n- Личный опыт\n\nЗаголовки должны быть кликабельными, но не лживыми."
  },

  // PRODUCTIVITY
  {
    id: 'p1',
    title: 'Саммари (TL;DR)',
    category: 'Productivity',
    description: 'Быстрое извлечение сути из большого текста.',
    tags: ['Summary', 'Research', 'Speed'],
    content: "Сделай краткое содержание (summary) следующего текста.\n1. Выдели главную идею в одном предложении.\n2. Перечисли 5 ключевых тезисов (bullet points).\n3. Определи общий тон текста.\n\nТекст:\n[ВСТАВИТЬ ТЕКСТ]"
  },
  {
    id: 'p2',
    title: 'План обучения (Roadmap)',
    category: 'Productivity',
    description: 'Персональный план изучения любого навыка.',
    tags: ['Education', 'Self-improvement'],
    content: "Я хочу изучить [НАВЫК, напр. Python / Игра на гитаре] с нуля за [СРОК, напр. 3 месяца]. У меня есть [КОЛИЧЕСТВО ЧАСОВ] в неделю.\n\nСоставь подробный план обучения по неделям. Для каждой недели укажи:\n- Темы для изучения.\n- Практические задания.\n- Критерий успеха (как я пойму, что освоил тему)."
  },

  // IMAGE GENERATION
  {
    id: 'i1',
    title: 'Midjourney: Кинематографичный Портрет',
    category: 'Image Gen',
    description: 'Шаблон для создания гиперреалистичных фото-портретов.',
    tags: ['Midjourney', 'Photography', 'Realistic'],
    content: "Cinematic portrait of [ОПИСАНИЕ ПЕРСОНАЖА], [МЕСТО ДЕЙСТВИЯ], shot on Kodak Portra 400, 35mm lens, f/1.8, golden hour lighting, hyper-detailed skin texture, atmospheric bokeh, emotional gaze --ar 4:5 --v 6.0 --style raw"
  },
  {
    id: 'i2',
    title: '3D Персонаж (Pixar Style)',
    category: 'Image Gen',
    description: 'Создание милых 3D персонажей в стиле анимации.',
    tags: ['DALL-E', '3D', 'Character'],
    content: "Cute 3D render of a [ПЕРСОНАЖ, напр. small robot gardener], isometric view, soft studio lighting, pastel color palette, clay texture, high fidelity, 3d icon style, like a Pixar movie character, solid background."
  },
  {
    id: 'i3',
    title: 'Минималистичный Логотип',
    category: 'Image Gen',
    description: 'Векторный стиль для создания логотипов и иконок.',
    tags: ['Logo', 'Vector', 'Branding'],
    content: "Flat vector logo of [ОБЪЕКТ], minimalist design, simple geometric shapes, white background, professional corporate identity, Paul Rand style, no text, clean lines --no shadow, shading, realistic details"
  },
  {
    id: 'i4',
    title: 'UI/UX Дизайн Сайта',
    category: 'Image Gen',
    description: 'Генерация референсов для веб-дизайна.',
    tags: ['Web Design', 'UI', 'UX'],
    content: "High fidelity UI design of a [ТИП ПРИЛОЖЕНИЯ/САЙТА], mobile app interface, Dribbble trending style, dark mode, glassmorphism elements, clean layout, user-friendly, modern typography, Figma render --ar 9:16"
  },
  {
    id: 'i5',
    title: 'Фэнтези Пейзаж (Epic Fantasy)',
    category: 'Image Gen',
    description: 'Генерация эпических локаций для игр или книг.',
    tags: ['Landscape', 'Fantasy', 'Environment'],
    content: "Epic fantasy landscape, floating islands, waterfalls cascading into the void, ancient ruins, bioluminescent flora, majestic dragon in the distance, dramatic lighting, volumetric fog, wide angle shot, 8k resolution, Unreal Engine 5 render style --ar 16:9"
  },
  {
    id: 'i6',
    title: 'Концепт-арт персонажа (Character Sheet)',
    category: 'Image Gen',
    description: 'Лист с персонажем в разных ракурсах для 3D моделлеров.',
    tags: ['Character Design', 'Concept Art', 'Reference'],
    content: "Character sheet of a cyberpunk street samurai, female, neon katana, tactical gear, detailed techwear, three views: front, side, back, neutral background, clean lines, concept art style, ArtStation trending, high detail --no background --ar 3:2"
  },
  {
    id: 'i7',
    title: 'Маслом на холсте (Van Gogh Style)',
    category: 'Image Gen',
    description: 'Стилизация под классическую живопись.',
    tags: ['Art', 'Painting', 'Style'],
    content: "Starry night over a modern metropolis, oil painting style, thick brushstrokes, impasto texture, vibrant swirls of blue and yellow, Vincent van Gogh style, emotional, masterpiece, canvas texture details"
  }
];
