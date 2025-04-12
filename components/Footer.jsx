'use client'
export default function Footer() {
    return (
      <footer className="w-full bg-gradient-to-b from-cyan-600 to-blue-700 dark:to-gray-900 text-white dark:bg-gradient-to-t text-center py-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} НАТК. Все права защищены.</p>
      </footer>
    );
  }
  