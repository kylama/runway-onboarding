interface Props {
  project: {
    projectName: string;
    startDate?: Date;
    endDate?: Date;
    description?: string;
    deploymentLink?: string;
    githubLink?: string;
  };
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold text-lg">{project.projectName}</h2>
      {project.description && <p>{project.description}</p>}
      <p>
        {project.startDate
          ? new Date(project.startDate).toLocaleDateString()
          : "-"}{" "}
        -{" "}
        {project.endDate
          ? new Date(project.endDate).toLocaleDateString()
          : "Present"}
      </p>
      {project.deploymentLink && (
        <p>
          Deployment:{" "}
          <a href={project.deploymentLink} className="text-blue-500">
            {project.deploymentLink}
          </a>
        </p>
      )}
      {project.githubLink && (
        <p>
          GitHub:{" "}
          <a href={project.githubLink} className="text-blue-500">
            {project.githubLink}
          </a>
        </p>
      )}
    </div>
  );
}
