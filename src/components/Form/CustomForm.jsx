import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const CustomForm = props => {
    const formState = props.opened ? 'f-form f-form--opened' : 'f-form';
    return(
        <div className = {formState}>
            <Form>
                <Form.Group controlId="#" ref={props.formRef}>
                {
                    props.heading.map( item => {
                        return <Form.Control 
                                        key = {item.id}
                                        data-id = {item.id}
                                        type="text" 
                                        placeholder={item.title}
                                    />
                    })
                }
                
                </Form.Group>
                <div className="f-form__submit">
                    <Button variant="primary" type="submit" onClick={props.onClick}>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>

    )
}
export default CustomForm;