import { useNavigate } from 'react-router-dom';
// <-- Esto depende del uso real

export const useRedirectToLearning = () => {
  const navigate = useNavigate();
  return () => {
    navigate('/dashboard');
  };
};
