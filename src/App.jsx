import { useState } from "react";
import {
  GraduationCap,
  Users,
  BookOpen,
  Youtube,
  FileText,
  Brain,
  Book,
} from "lucide-react";
import { motion } from "framer-motion";
import TeamRoleModal from "./components/TeamRoleModal";
import LectureModal from "./components/LectureModal";
import FeatureCard from "./components/FeatureCard";

function App() {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [isLectureModalOpen, setIsLectureModalOpen] = useState(false);

  const handleJoinTeam = () => {
    setIsTeamModalOpen(true);
  };

  const handleGetLectures = () => {
    setIsLectureModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-row-reverse items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-2 rounded-full border-2 border-blue-600 hover:bg-blue-50 transition flex items-center gap-2"
                onClick={handleGetLectures}
              >
                <Book className="w-5 h-5" />
                المحاضرات
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                onClick={handleJoinTeam}
              >
                انضم إلينا
              </motion.button>
            </div>
            <div className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-3xl font-bold text-blue-600"
              >
                <img src="../main.png" className="w-48" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      <main>
        {/* Hero Section */}
        <section className="text-center py-16 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 text-gray-900"
          >
            رفيقُ مشواركم الجامعيّ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            بلوبيتس؛ يأخذ بيدكم نحو التّخرج ويفتح أمامكم أفق الإبداع
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center gap-2"
              onClick={handleJoinTeam}
            >
              <Users className="w-5 h-5" />
              انضم إلى الفريق
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full border-2 border-blue-600 hover:bg-blue-50 transition flex items-center gap-2"
              onClick={handleGetLectures}
            >
              <Book className="w-5 h-5" />
              المحاضرات
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-8 mt-6 "
          >
            <a
              href="https://t.me/BlueBitsTeam"
              className="size-[45px] cursor-pointer border bg-blue-600 hover:bg-white text-white text-2xl hover:text-blue-600 transition  rounded-full flex justify-center items-center "
            >
              <i className="bx bxl-telegram  "></i>
            </a>
            <a
              href="https://t.me/BlueBitsTeam"
              className="size-[45px] cursor-pointer border bg-blue-600 hover:bg-white text-white text-3xl hover:text-blue-600 transition  rounded-full flex justify-center items-center "
            >
              <i className="bx bxl-youtube "></i>
            </a>
            <a
              href="https://t.me/BlueBitsTeam"
              className="size-[45px] cursor-pointer border bg-blue-600 hover:bg-white text-white text-3xl hover:text-blue-600 transition  rounded-full flex justify-center items-center "
            >
              <i className="bx bxl-facebook "></i>
            </a>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-16 text-gray-900"
            >
              خدماتنا
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<FileText className="w-8 h-8 text-blue-600" />}
                title="تحويل المحاضرات"
                description="تحويل المحاضرات الورقية إلى ملفات الكترونية"
              />
              <FeatureCard
                icon={<Youtube className="w-8 h-8 text-blue-600" />}
                title="بث مباشر"
                description="بثوت مباشرة لشرح المواد قبل يوم الامتحان"
              />
              <FeatureCard
                icon={<BookOpen className="w-8 h-8 text-blue-600" />}
                title="مكتبة يوتيوب"
                description="مكتبة واسعة على يوتيوب من تجارب المواد العملية"
              />
              <FeatureCard
                icon={<Brain className="w-8 h-8 text-blue-600" />}
                title="ربط المواد"
                description="ربط المواد النظرية مع الحياة العملية"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { number: "+200", label: "عضو متطوع" },
                { number: "+1000", label: "طالب مستفيد" },
                { number: "+50", label: "مادة دراسية" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: index * 0.2 }}
                    className="text-4xl font-bold mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              هل تود أن تكون جزءاً من الفريق الذي يصنع الفرق؟
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 mb-8"
            >
              انضم إلى أكثر من 200 عضو في فريق بلوبيتس
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
              onClick={handleJoinTeam}
            >
              سجل الآن
            </motion.button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-4"
            >
              BlueBits
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400"
            >
              فريق طلابي تطوعي - كلية الهندسة المعلوماتية - جامعة حلب
            </motion.p>
          </div>
        </div>
      </footer>

      <TeamRoleModal
        isOpen={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
      />
      <LectureModal
        isOpen={isLectureModalOpen}
        onClose={() => setIsLectureModalOpen(false)}
      />
    </div>
  );
}

export default App;
