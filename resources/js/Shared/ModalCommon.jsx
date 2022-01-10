import classNames from 'classnames'
import LoadingButton from './LoadingButton'

export default function ModalCommon({ show, size, closeAction, title, className, children, btnTitle = "", btnAction, loading = false }) {
  const modalBodyClasses = classNames(
    'flex flex-col z-50 w-11/12 sm:w-5/6 mx-auto my-12 rounded-lg border bg-white border-gray-300 shadow-xl',
    {
      'max-w-md': size === 'sm',
      'max-w-xl': size === 'md',
      'max-w-2xl': size === 'l',
      'max-w-4xl': (!size || size === 'lg'),
      'max-w-6xl': size === 'xl',
    },
    className,
  )
  return (
    <div className={`fixed z-50 inset-0 overflow-y-auto ${!show && 'hidden'}`}>
      <div className="fixed z-0 inset-0 transition-opacity" aria-hidden="true" onClick={closeAction}>
        <div className="absolute inset-0 bg-gray-800 opacity-30" />
      </div>
      <div className="flex min-h-screen justify-center items-center antialiased">
        <div className={modalBodyClasses}>
          <div
            className="flex flex-row justify-between items-center px-6 py-4 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
          >
            <p className="font-montserrat-600 text-2xl">{title}</p>
            <svg
              className="w-6 h-6 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={closeAction}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          {/* children start */}
          <div className="flex flex-col px-6 py-5 confirmmodal-children font-inter-normal">
            {children}
          </div>
          {/* children end */}
          <div
            className="flex flex-row items-center justify-between px-6 py-4 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
          >
            <LoadingButton
              loading={false}
              type="button"
              className="relative btn-modal-children flex justify-center"
              onClick={closeAction}
            >
              Cancel
            </LoadingButton>
            {btnTitle && <LoadingButton
              type="button"
              className="ml-auto relative btn-modal-children flex justify-center"
              onClick={btnAction}
              isBgWhite={false}
              isShow={false}
              loading={loading}
            >
              {btnTitle}
            </LoadingButton>}
          </div>
        </div>
      </div>
    </div>
  )
}
