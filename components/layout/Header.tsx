import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* 1. Логотип */}
        <Link href="/" className="text-2xl font-bold text-black">
          KelGen
        </Link>

        {/* 2. Навигация (из ТЗ) */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/about" className="hover:text-black">О нас</Link>
          <Link href="/projects" className="hover:text-black">Проекты</Link>
          <Link href="/factions" className="hover:text-black">Фракции</Link>
          <Link href="/volunteers" className="hover:text-black">Волонтёрам</Link>
          <Link href="/reports" className="hover:text-black">Отчёты</Link>
          <Link href="/contacts" className="hover:text-black">Контакты</Link>
        </nav>

        {/* 3. Кнопки справа */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium cursor-pointer">RU / EN</span>
          <Button>Пожертвовать</Button>
        </div>
      </div>
    </header>
  );
}