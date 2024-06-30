import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';

//Style
import 'react-toastify/dist/ReactToastify.css'

//Montando estrutura do componente para tratamento de erro das mensagens
const Toast = styled(ToastContainer)`
.Toastify__toast{
  background: 'rgba(255, 255, 255, 0)' !important;
  font-weight: bold;
  color: 'rgb(0, 0, 0)' !important;
}
.Toastify__toast--info{
  color: 'rgb(0, 0, 0)' !important;
}  
.Toastify__toast--sucess{
  color: 'rgb(28, 138, 37)' !important;
}
.Toastify__toast--failed {
  color: 'rgb(146, 15, 15)' !important;
}
`

//Montando mensagem de Validação
export const showToast =({typeToast, messageToast}:{typeToast:string, messageToast:string}) => {
    switch(typeToast){
        case 'success':
            toast.success(messageToast)
            break;
        case 'failed':
            toast.error(messageToast)
            break;
        default:
            toast.info(messageToast)
    }
}

export default function ToastAnimated(){
    return <Toast />
};