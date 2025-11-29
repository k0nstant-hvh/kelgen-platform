export function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-auto border-t">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl font-bold">KelGen Charity</h2>
        <p className="text-gray-500 text-sm mt-2">
          Развитие молодежного лидерства, STEM и помощь обществу.
        </p>
        <p className="text-gray-400 text-xs mt-8">
          © {new Date().getFullYear()} KelGen. Все права защищены.
        </p>
      </div>
    </footer>
  );
}