import { Card } from "flowbite-react";

const Cards = ({ profile }) => {
    const {BioDataType,ProfileImage,PermanentDivisionName,Age,Occupation,ViewProfile}=profile
  return (
    <Card
      className="max-w-sm"
      imgAlt={`Profile image of ${BioDataType}`}
      imgSrc={ProfileImage}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {BioDataType} - {PermanentDivisionName}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Age: {Age} <br />
        Occupation: {Occupation}
      </p>
      <a href={ViewProfile} className="text-blue-500 hover:underline">
        View Profile
      </a>
    </Card>
  );
};

export default Cards;
