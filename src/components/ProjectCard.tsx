//import//
import { useNavigate } from "react-router-dom"

interface ProjectCardProps {
    image: string
    name: string
    id: number
}

export const ProjectCard: React.FC<ProjectCardProps> = ({image, name, id}) => {
    // const navigate = useNavigate();

  return (
    // <div onClick={() => navigate(`/project/${id}`)}>
    <div className="project-card">
        <div style={{ backgroundImage: `url(${image})` }} className="bg-cover bg-no-repeat bg-center w-[300px] h-[200px] rounded-t-2xl "/>
        <h2>{name}</h2>
    </div>
  )
}
