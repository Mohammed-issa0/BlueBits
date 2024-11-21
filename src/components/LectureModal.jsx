import { useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Download, ChevronRight, FileText, Beaker } from 'lucide-react';

const years = ['السنة الأولى', 'السنة الثانية', 'السنة الثالثة', 'السنة الرابعة', 'السنة الخامسة'];
const semesters = ['الفصل الأول', 'الفصل الثاني'];
const subjects = [
  'البرمجة',
  'الرياضيات',
  'الفيزياء',
  'الإلكترونيات',
  'نظم التشغيل',
  'قواعد المعطيات',
  'الشبكات'
];

const lectureTypes = ['محاضرات نظري', 'محاضرات عملي'];

function LectureModal({ isOpen, onClose }) {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const resetSelections = () => {
    setSelectedYear(null);
    setSelectedSemester(null);
    setSelectedSubject(null);
    setSelectedType(null);
  };

  const handleBack = () => {
    if (selectedType) setSelectedType(null);
    else if (selectedSubject) setSelectedSubject(null);
    else if (selectedSemester) setSelectedSemester(null);
    else if (selectedYear) setSelectedYear(null);
  };

  const generateLectures = () => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `محاضرة ${i + 1}`,
      url: '#'
    }));
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog 
        as="div" 
        className="relative z-50" 
        onClose={() => {
          onClose();
          resetSelections();
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-right shadow-xl transition-all">
                <div className="flex justify-between items-center mb-6">
                  <button
                    onClick={handleBack}
                    className={`text-blue-600 flex items-center ${!selectedYear ? 'invisible' : ''}`}
                  >
                    <ChevronRight className="w-5 h-5" />
                    رجوع
                  </button>
                  <Dialog.Title className="text-2xl font-bold text-gray-900">
                    المحاضرات
                  </Dialog.Title>
                </div>

                <AnimatePresence mode="wait">
                  {!selectedYear && (
                    <motion.div
                      key="years"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="grid grid-cols-1 gap-4"
                    >
                      {years.map((year) => (
                        <motion.button
                          key={year}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedYear(year)}
                          className="bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition flex items-center justify-between"
                        >
                          <Book className="w-6 h-6 text-blue-600" />
                          <span className="text-lg">{year}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}

                  {selectedYear && !selectedSemester && (
                    <motion.div
                      key="semesters"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="grid grid-cols-1 gap-4"
                    >
                      {semesters.map((semester) => (
                        <motion.button
                          key={semester}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedSemester(semester)}
                          className="bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition flex items-center justify-between"
                        >
                          <Book className="w-6 h-6 text-blue-600" />
                          <span className="text-lg">{semester}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}

                  {selectedSemester && !selectedSubject && (
                    <motion.div
                      key="subjects"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="grid grid-cols-1 gap-4"
                    >
                      {subjects.map((subject) => (
                        <motion.button
                          key={subject}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedSubject(subject)}
                          className="bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition flex items-center justify-between"
                        >
                          <Book className="w-6 h-6 text-blue-600" />
                          <span className="text-lg">{subject}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}

                  {selectedSubject && !selectedType && (
                    <motion.div
                      key="types"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="grid grid-cols-1 gap-4"
                    >
                      {lectureTypes.map((type) => (
                        <motion.button
                          key={type}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedType(type)}
                          className="bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition flex items-center justify-between"
                        >
                          {type.includes('نظري') ? (
                            <FileText className="w-6 h-6 text-blue-600" />
                          ) : (
                            <Beaker className="w-6 h-6 text-blue-600" />
                          )}
                          <span className="text-lg">{type}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}

                  {selectedType && (
                    <motion.div
                      key="lectures"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="grid grid-cols-2 gap-4"
                    >
                      {generateLectures().map((lecture) => (
                        <motion.a
                          key={lecture.id}
                          href={lecture.url}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition flex items-center justify-between"
                        >
                          <Download className="w-5 h-5 text-blue-600" />
                          <span>{lecture.name}</span>
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-6 text-sm text-gray-500 text-center">
                  {selectedYear && <span>{selectedYear} / </span>}
                  {selectedSemester && <span>{selectedSemester} / </span>}
                  {selectedSubject && <span>{selectedSubject} / </span>}
                  {selectedType && <span>{selectedType}</span>}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

LectureModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default LectureModal;