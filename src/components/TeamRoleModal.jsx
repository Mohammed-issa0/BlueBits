import PropTypes from 'prop-types';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Headphones, GraduationCap, Code } from 'lucide-react';

const roles = [
  {
    title: 'العضو العلمي',
    subtitle: 'SOURCE CODE',
    icon: <Headphones className="w-12 h-12 text-blue-600" />,
    description: [
      'المصدر الأول لمعلومات المحاضرة',
      'ضرورة الحضور وكتابة المحاضرة ورقياً',
      'دقة الملاحظة لاكتشاف الفروق بين المحاضرة الورقية والرقمية'
    ]
  },
  {
    title: 'العضو التقني',
    subtitle: 'COMPILER',
    icon: <Code className="w-12 h-12 text-blue-600" />,
    description: [
      'صلة الوصل بين الحبر على الورق، و الملف الرقمي على البوت',
      'تفكيك ألغاز العضو العلمي',
      'مهارات الكتابة على الوورد متضمن رموز المعادلات العجيبة'
    ]
  },
  {
    title: 'المسؤول العلمي',
    subtitle: 'SOURCE CODE',
    icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
    description: [
      'متابعة تحوّل المحاضرة من شكلها الورقي إلى شكلها الرقميّ',
      'المسؤول عن النتيجة النهائية للمحاضرة',
      'ضمان تطابق المحتوى العلمي والتقني'
    ]
  }
];

function TeamRoleModal({ isOpen, onClose }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
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
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-right align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-3xl font-bold text-center text-gray-900 mb-8">
                  انضمّ إلى خلية بلوبيتس
                </Dialog.Title>
                <p className="text-xl text-center text-gray-600 mb-12">
                  لنفتح أمامك أفق الإبداع
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {roles.map((role, index) => (
                    <motion.div
                      key={role.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-gray-50 p-6 rounded-xl"
                    >
                      <div className="flex justify-center mb-4">
                        {role.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h4>
                      <p className="text-blue-600 mb-4 text-sm">{role.subtitle}</p>
                      <ul className="space-y-2 text-gray-600 text-right">
                        {role.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-full border border-transparent bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    حسناً، فهمت
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

TeamRoleModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default TeamRoleModal;