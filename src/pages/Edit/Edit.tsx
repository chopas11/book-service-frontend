import React from 'react';
import PublishStep from "../../shared/ui/PublishStep/PublishStep.tsx";
import UpdateTitle from "../../features/updateTitle/ui/UpdateTitle.tsx";
import AddAuthors from "../../features/addAuthors/ui/AddAuthors.tsx";
import UpdateDescription from "../../features/updateDescription/ui/updateDescription.tsx";
import UploadBookFile from "../../features/uploadBookFile/ui/UploadBookFile.tsx";

const Edit: React.FC = () => {
    return (
        <>
            <h2 className="header_center">Редактирование</h2>
            <PublishStep number={1}>
                <UpdateTitle/>
                <AddAuthors />
            </PublishStep>
            <PublishStep number={2}>
                <UpdateDescription />
            </PublishStep>
            <PublishStep number={3}>
                <UploadBookFile />
            </PublishStep>
        </>
    );
};

export default Edit;