import { useNavigate } from 'react-router-dom';
export const useRedirectToLearning = () => {
  const navigate = useNavigate();
  return () => {
    navigate('/my-learning');
  };
};
