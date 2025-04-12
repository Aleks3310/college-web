'use client'

import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AuthContext } from './Providers'
import Carousel from '@/components/Carousel'

export default function HomePage() {
  const router = useRouter()
  const { isAuthenticated } = useContext(AuthContext)

  useEffect(() => {
    if (isAuthenticated === false) router.push('/login')
  }, [isAuthenticated, router])

  if (isAuthenticated === null) return null

  return (
    <div className="min-h-screen h-full flex items-center justify-center dark:bg-gray-900 bg-[#e6f9f9] px-4">
      <main className="pt-24 px-4">
        <Carousel />
        <section className=" dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-10 text-center">
           История колледжа
          </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-2">1954 — Основание колледжа</h3>
         <p className="text-gray-700 dark:text-gray-300 text-xl">
            В 1954 году колледж начал свою работу как техническое училище. Обучение велось по ограниченному числу специальностей, но уже тогда закладывались основы будущего роста.
         </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-2">1972 — Преобразование в техникум</h3>
          <p className="text-gray-700 dark:text-gray-300 text-xl">
            Колледж получил статус техникума, расширил направления подготовки и учебную базу, стал готовить квалифицированных специалистов для предприятий региона.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-2">1995 — Получение статуса колледжа</h3>
          <p className="text-gray-700 dark:text-gray-300 text-xl">
            Преобразование в колледж дало толчок к внедрению новых стандартов образования, повышению качества подготовки и расширению связей с вузами.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-2">2004 — 50-летие колледжа</h3>
          <p className="text-gray-700 dark:text-gray-300 text-xl">
            Юбилей стал важной вехой: колледж отметил 50 лет успеха, развития, преданности профессии и обучению новых поколений специалистов.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-2">2014 — Новые программы</h3>
          <p className="text-gray-700 dark:text-gray-300 text-xl">
            Внедрение ИТ-технологий, развитие международного сотрудничества и обновление программ вывели колледж на новый уровень образования.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-2">2024 — 70 лет колледжу</h3>
          <p className="text-gray-700 dark:text-gray-300 text-xl">
            Колледж отметил 70 лет как современное учреждение, сочетающее традиции и инновации, открывающее перед студентами новые горизонты.
          </p>
        </div>
        <div class="bg-blue-100 dark:bg-gray-800 p-6 rounded-lg mt-8 col-span-3 shadow-md hover:shadow-xl transition">
          <h3 class="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-2 text-center">Итоги и будущее</h3>
          <p class="text-xl mt-2 text-gray-700 dark:text-gray-300">История учебного заведения отражает непрерывное стремление к улучшению качества образования и внедрению инновационных подходов. За годы существования колледж стал одним из ведущих учреждений в своем регионе, предоставляя своим студентам уникальные возможности для развития. В ближайшие годы планируется дальнейшее укрепление партнерских связей с международными университетами и бизнесом, развитие новых образовательных программ, а также усиление экологической устойчивости учебного процесса.</p>
        </div>
      </div>
    </div>
    </section>
      </main>
    </div>
  )
}
