import './index.less'
import React, { useState } from 'react'
import { Cascader, Input, Select, Space, Form, Button, Radio, message } from 'antd';
import { login,register } from '../../service/user';
import { useNavigate } from 'react-router-dom';
const Admin = () => {
    const [form] = Form.useForm();
    const [options, setOptions] = useState(true)
    const navigate = useNavigate()
    const onFinish = async (values) => {
        console.log('Success:', values);
        if(options){
            const res = await login(values)
            if(res === 'fail'){
                message.error('用户名或密码错误')
            }else {
                message.success('登陆成功')
                navigate('/shoppingCart')
                form.resetFields();
            }
        }else{
            const res = await register(values)
            if(res === 'fail'){
                message.error('注册失败,用户名已存在')
            }else {
                message.success('注册成功')
                setOptions(!options)
                form.resetFields();
            }
        }
    };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const signFormItemArr = [
        {
            label:'用户名',
            name:'name',
            rules:[
                {
                    required: true,
                    message: '请输入用户名',
                },
            ]
        },
        {
            label:'密码',
            name:'password',
            rules:[
                {
                    required: true,
                    message: '请输入密码',
                },
            ]
        }
    ]
    const loginFormItemArr = [
        {
            label:'用户名',
            name:'name',
            rules:[
                {
                    required: true,
                    message: '请输入用户名',
                },
            ]
        },
        {
            label:'密码',
            name:'password',
            rules:[
                {
                    required: true,
                    message: '请输入密码',
                },
            ]
        },
        {
            label:'确认密码',
            name:'ensurePassword',
            rules:[
                {
                    required: true,
                    message: '请输入密码',
                },
            ]
        },
        {
            label:'性别',
            name:'gender',
            children:[
                {
                    label:'男',
                    value:'male'
                },
                {
                    label:'女',
                    value:'female'
                }
            
            ]
        },
        {
            label:'昵称',
            name:'nickname',
            rules:[
                {
                    required: true,
                    message: '请输入昵称',
                },
                {
                    pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
                    message: '请输入正确的昵称',
                }
            ]
        },
        {
            label:'邮箱',
            name:'email',
            rules:[
                {
                    type: 'email',
                    message: '请输入正确的邮箱格式!',
                },
                {
                    required: true,
                    message: '请输入邮箱',
                },
            ]
        },
        {
            label:'手机号',
            name:'phone',
            rules:[
                {
                    required: true,
                    message: '请输入手机号',
                },
                {
                    pattern: /^1[3456789]\d{9}$/,
                    message: '请输入正确的手机号',
                }
            ]
        },

    ]
    return (
        <div className='admin'>
            <div className='title'>
                {
                    !options?'注册':'登陆'
                }
            </div>
            <div className='form_content'>
                <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 18 }}
                style={{ width: 450 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                    {
                        (options?signFormItemArr:loginFormItemArr).map((item,index)=>{
                            return(                                
                                <Form.Item 
                                label={item.label}
                                name={item.name}
                                rules={item.rules}
                                key={index}
                                >
                                    {
                                        item.name === 'password'?
                                        <Input.Password />
                                        :
                                            item.name === 'gender'?
                                            <Radio.Group>
                                                {
                                                item.children.map((val,index)=>(
                                                    <Radio key={index} value={val.value}>{val.label}</Radio>
                                                ))
                                                }
                                            </Radio.Group>
                                            :
                                            <Input></Input>
                                    }
                                </Form.Item>
                            )
                        })
                    }
                    <Form.Item
                    wrapperCol={{
                        offset: 4,
                        span: 16,
                    }}
                    >
                        <Button type="primary" htmlType="submit" style={{ width:'100px' }}>
                            {
                                !options?'注册':'登陆'
                            }
                        </Button>
                    </Form.Item>
                </Form>
                <div className='form_bottom'>
                    {
                        options&&
                        <div>没有账号？注册一个 🐱</div>
                    }
                    <div className='select_button' onClick={()=>{setOptions(!options)}}>
                        {
                            options?'注册':'登陆'
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin