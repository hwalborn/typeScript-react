import { Drank } from './Drank';

export interface DrankProps {
    currentDrank: Drank,
    onClick: (event: React.MouseEvent<HTMLLIElement>) => void
}