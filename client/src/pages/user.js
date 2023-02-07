import React from "react";
import {Button, Form, Input} from "antd";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function User(){
    const navigate = useNavigate();
    const onFinish = async(values)=>{
        try{
            const response = await axios.post("api/user/push", values);
            if(response.data.success){
                navigate("/")
            }else{
                console.log("Error");
            }
        }
        catch(error){
            console.log("Axios error");
        }
    }
    return(
        <Form onFinish={onFinish}>
            <Form.Item label="Enter Name" name="name">
                <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
    );
}

export default User;