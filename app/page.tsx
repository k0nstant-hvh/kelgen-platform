import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 bg-slate-50 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
          Меняем мир руками <span className="text-blue-600">молодёжи</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Мы — KelGen. Мы развиваем STEM, создаем протезы и воспитываем лидеров.
          Присоединяйся к нам, чтобы строить будущее Казахстана уже сегодня.
        </p>
        
        <div className="mt-10 flex gap-4 justify-center">
          <Button size="lg" className="px-8">Стать волонтёром</Button>
          <Button size="lg" variant="outline" className="px-8">
            Поддержать проект
          </Button>
        </div>
      </section>

      {/* Здесь потом будут остальные блоки: Цифры, Проекты и т.д. */}
    </div>
  );
}