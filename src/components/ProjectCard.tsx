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
    <div className="md:project-card rounded-[15px] w-[250px] h-[300px] my-[40px] mx-[15px] bg-light-blue text-dark-secondary ">
        <div style={{ backgroundImage: `url(${image})` }} className="bg-cover bg-no-repeat bg-center w-[250px] md:w-[300px] h-[200px] rounded-t-2xl"/>
        <h2 className="text-2xl whitespace-normal ">{name}</h2>
    </div>
  )
}
