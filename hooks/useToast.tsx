import { iToast, Toast } from '../components/Toast'

export const useToast = () => {
  const showToast = (props : iToast) => Toast(props)

  const showError = (message: string) => showToast({ type: 'error', message })
  const showInfo = (message: string) => showToast({ type: 'info', message })
  const showSuccess = (message: string) => showToast({ type: 'success', message })
  const showWarning = (message: string) => showToast({ type: 'warning', message })

  return {
    showToast,
    showError,
    showInfo,
    showSuccess,
    showWarning,
  }
}
