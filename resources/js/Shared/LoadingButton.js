import cx from 'classnames'
import LoadingIcn2 from '../Icons/LoadingIcn2'
import LoadingIcn from '../Icons/LoadingIcn';

export default ({ loading, type, className, children, onClick, isBgWhite, isShow }) => {
  const classNames = cx(
    'flex items-center',
    // 'focus:outline-none',
    {
      'pointer-events-none bg-opacity-75 select-none loading-btn': loading,
    },
    className,
  )
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type || 'button'} disabled={loading} className={classNames} onClick={onClick}>
      {children}
      {((!isBgWhite && isShow) || (loading && !isBgWhite))
        ? <LoadingIcn2 className="auth-ml6" />
        : ((isBgWhite && isShow) || loading) && <LoadingIcn className="auth-ml6" />}
    </button>
  )
}
