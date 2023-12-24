import { TSingleUser } from '@core/types/user';
import { IToggleStage } from '@organisms/ConnectUserOrganisms/ConnectUserModalOrganisms/resources';

interface IShowUserProps {
  toggleStage: ({ nextStep }: IToggleStage) => void;
  userData: TSingleUser;
}

export default IShowUserProps;
