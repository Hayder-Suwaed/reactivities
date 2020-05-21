import React, { useState } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProp {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity | null;
}
 
export const ActivityForm: React.FC<IProp> = ({
  setEditMode,
  activity: initialFormData
}) => {
  const initializeForm = () => {
    if (initialFormData) {
      return initialFormData;
    } else {
      return {
        id: "",
        title: "",
        description: "",
        category: "",
        date: "",
        city: "",
        venue: ""
      };
    }
  };
 
  const [activity, setActivity] = useState<IActivity>(initializeForm);
 
  return (
    <Segment clearing>
      <Form>
        <Form.Input placeholder="Title" value={activity.title} />
        <Form.TextArea
          rows={2}
          placeholder="Description"
          value={activity.description}
        />
        <Form.Input placeholder="Category" value={activity.category} />
        <Form.Input type="date" placeholder="Date" value={activity.date} />
        <Form.Input placeholder="City" value={activity.city} />
        <Form.Input placeholder="Venue" value={activity.venue} />
        <Button floated="right" positive type="submit" content="Create" />
        <Button
          onClick={() => setEditMode(false)}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
