import { useNavigate } from 'react-router-dom'

export const useCoordinator = () => {
    let navigate = useNavigate()
    const goTo = {
        LandingPage: () => navigate('/'),
        Register: () => navigate('/register')
    }

    return goTo
}