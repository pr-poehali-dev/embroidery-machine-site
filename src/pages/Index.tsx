import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "EmbroidPro 3000",
      price: "89 900 ₽",
      description: "Компактная домашняя машинка с 200 встроенными дизайнами",
      features: ["200 дизайнов", "USB порт", "LCD дисплей"],
      badge: "Хит продаж"
    },
    {
      id: 2,
      name: "StitchMaster X5",
      price: "149 900 ₽",
      description: "Профессиональная машинка для бизнеса с 15 иглами",
      features: ["15 игл", "Wi-Fi", "Автоматическая заправка"],
      badge: "Премиум"
    },
    {
      id: 3,
      name: "HomeStitch Mini",
      price: "49 900 ₽",
      description: "Идеальна для начинающих, компактная и простая в использовании",
      features: ["50 дизайнов", "Легкий вес", "Простой интерфейс"],
      badge: "Для новичков"
    },
    {
      id: 4,
      name: "IndustriMax Pro",
      price: "299 900 ₽",
      description: "Промышленная машинка для массового производства",
      features: ["20 игл", "Высокая скорость", "Профессиональное ПО"],
      badge: "Топ"
    }
  ];

  const reviews = [
    {
      name: "Мария Иванова",
      text: "Купила EmbroidPro 3000 для домашнего бизнеса. Качество вышивки потрясающее! Окупилась за 2 месяца.",
      rating: 5
    },
    {
      name: "Дмитрий Соколов",
      text: "StitchMaster X5 - это просто космос! Работаю с ней полгода, ни одной поломки. Рекомендую!",
      rating: 5
    },
    {
      name: "Анна Петрова",
      text: "Начинала с HomeStitch Mini. Отличный выбор для обучения. Через год перешла на ProMaster.",
      rating: 5
    }
  ];

  const videos = [
    {
      title: "Обзор EmbroidPro 3000",
      duration: "8:45",
      views: "12.5K"
    },
    {
      title: "Сравнение моделей 2024",
      duration: "15:20",
      views: "28.3K"
    },
    {
      title: "Мастер-класс по настройке",
      duration: "22:10",
      views: "45.1K"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              EmbroidShop
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#videos" className="hover:text-primary transition-colors">Видео</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-secondary text-white">Официальный дилер</Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Вышивальные машинки нового поколения
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Профессиональное оборудование для дома и бизнеса. Доставка по всей России. Гарантия 3 года.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary/10">
                  <Icon name="Play" size={20} className="mr-2" />
                  Видео обзор
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center animate-scale-in">
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Довольных клиентов</div>
                </div>
                <div className="text-center animate-scale-in" style={{animationDelay: '0.1s'}}>
                  <div className="text-4xl font-bold text-secondary">3 года</div>
                  <div className="text-sm text-gray-600">Гарантия</div>
                </div>
                <div className="text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
                  <div className="text-4xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-gray-600">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-white shadow-2xl">
                <Icon name="Sparkles" className="absolute top-4 right-4 text-primary animate-pulse" size={32} />
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Play" size={64} className="text-primary opacity-50" />
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Icon name="Eye" size={16} />
                  <span>152K просмотров</span>
                  <Icon name="ThumbsUp" size={16} className="ml-4" />
                  <span>4.9K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent text-white">Каталог 2024</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Популярные модели</h2>
            <p className="text-xl text-gray-600">Подберите идеальную машинку для ваших задач</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white">
                    {product.badge}
                  </Badge>
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon name="Package" size={64} className="text-primary opacity-30" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        <Icon name="Check" size={12} className="mr-1" />
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-4">{product.price}</div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-secondary text-white">Видеообзоры</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Смотрите и учитесь</h2>
            <p className="text-xl text-gray-600">Подробные обзоры и мастер-классы</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer animate-slide-up"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Icon name="Play" size={32} className="text-primary ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{video.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon name="Eye" size={14} />
                      <span>{video.views} просмотров</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-primary text-white">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят клиенты</h2>
            <p className="text-xl text-gray-600">Реальные отзывы от реальных людей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-shadow animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="font-bold">{review.name}</div>
                      <div className="text-sm text-gray-500">Проверенный покупатель</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-accent text-white">О компании</Badge>
              <h2 className="text-4xl font-bold mb-6">Ваш надежный партнер с 2015 года</h2>
              <p className="text-lg text-gray-700 mb-6">
                Мы — официальный дилер ведущих производителей вышивального оборудования. 
                За 9 лет работы помогли запустить более 500 успешных бизнесов по всей России.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-bold mb-1">Гарантия качества</div>
                    <div className="text-gray-600">3 года официальной гарантии на все модели</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Truck" className="text-secondary mt-1" size={24} />
                  <div>
                    <div className="font-bold mb-1">Бесплатная доставка</div>
                    <div className="text-gray-600">По всей России при заказе от 50 000 ₽</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Headphones" className="text-accent mt-1" size={24} />
                  <div>
                    <div className="font-bold mb-1">Сервис и поддержка</div>
                    <div className="text-gray-600">Круглосуточная техподдержка 24/7</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl"></div>
                    <div className="aspect-square bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl"></div>
                    <div className="aspect-square bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl"></div>
                    <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">9 лет</div>
                    <div className="text-gray-600">на рынке вышивального оборудования</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4 bg-secondary text-white">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Получите консультацию</h2>
              <p className="text-xl text-gray-600">Заполните форму и мы перезвоним в течение 15 минут</p>
            </div>
            <Card className="shadow-2xl animate-scale-in">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Наши контакты</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Phone" className="text-primary" size={24} />
                        </div>
                        <div>
                          <div className="font-bold mb-1">Телефон</div>
                          <a href="tel:+78001234567" className="text-primary hover:underline">+7 (800) 123-45-67</a>
                          <div className="text-sm text-gray-500">Звонок бесплатный</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Mail" className="text-secondary" size={24} />
                        </div>
                        <div>
                          <div className="font-bold mb-1">Email</div>
                          <a href="mailto:info@embroidshop.ru" className="text-primary hover:underline">info@embroidshop.ru</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="MapPin" className="text-accent" size={24} />
                        </div>
                        <div>
                          <div className="font-bold mb-1">Адрес</div>
                          <div className="text-gray-700">г. Москва, ул. Примерная, д. 1</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Clock" className="text-primary" size={24} />
                        </div>
                        <div>
                          <div className="font-bold mb-1">Режим работы</div>
                          <div className="text-gray-700">Пн-Пт: 9:00 - 18:00</div>
                          <div className="text-gray-700">Сб-Вс: выходной</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Форма обратной связи</h3>
                    <form className="space-y-4">
                      <div>
                        <Input placeholder="Ваше имя" className="h-12" />
                      </div>
                      <div>
                        <Input type="tel" placeholder="Телефон" className="h-12" />
                      </div>
                      <div>
                        <Input type="email" placeholder="Email" className="h-12" />
                      </div>
                      <div>
                        <Textarea placeholder="Ваш вопрос или комментарий" rows={4} />
                      </div>
                      <Button className="w-full h-12 bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90">
                        <Icon name="Send" size={18} className="mr-2" />
                        Отправить заявку
                      </Button>
                      <p className="text-xs text-gray-500 text-center">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" className="text-primary" size={32} />
                <span className="text-xl font-bold">EmbroidShop</span>
              </div>
              <p className="text-gray-400 text-sm">
                Ваш надежный партнер в мире вышивального оборудования с 2015 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Домашние машинки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Профессиональные</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Промышленные</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гарантия</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 EmbroidShop. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
