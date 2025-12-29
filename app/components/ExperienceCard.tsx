interface Props {
  experience: {
    company: string;
    title: string;
    location?: string;
    startDate?: Date;
    endDate?: Date;
    description?: string;
  };
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold text-lg">{experience.company}</h2>
      <p>{experience.title}</p>
      {experience.location && <p>{experience.location}</p>}
      <p>
        {experience.startDate
          ? new Date(experience.startDate).toLocaleDateString()
          : "-"}{" "}
        -{" "}
        {experience.endDate
          ? new Date(experience.endDate).toLocaleDateString()
          : "Present"}
      </p>
      {experience.description && <p>{experience.description}</p>}
    </div>
  );
}
