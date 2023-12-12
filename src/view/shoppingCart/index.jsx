import './index.less'
import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { InputNumber, Checkbox, Button } from 'antd';
const ShoppingCart = () => {
    const [data,setData] = useState([
        {
            goodsName: '懒懒',
            img: 'image/lanlan.png',
            price: '99999',
            num: '1',
            status:false
        },
        {
            goodsName: 'cow',
            img: 'image/nainiu.png',
            price: '400',
            num: '1',
            status:false
        },
        {
            goodsName: '小虎',
            img: 'image/xiaohu.png',
            price: '500',
            num: '1',
            status:false
        },
        {
            goodsName: '塞罗',
            img: 'image/sailuo.png',
            price: '200',
            num: '1',
            status:false
        },
        {
            goodsName: '橘蛋',
            img: 'image/judan.png',
            price: '300',
            num: '1',
            status:false
        },
        {
            goodsName: '麦麦',
            img: 'image/maimai.png',
            price: '120',
            num: '1',
            status:false
        },
    ])
    const toPoint = (price) => {
        return _.floor(price / 20)
    }
    const countTotalPrice = (data) => {
        let totalPrice = 0
        data = data.filter(item=>item.status)
        data.forEach(item=>{
            totalPrice += _.multiply(item.num,item.price)
        })
        return totalPrice
    }
    useEffect(()=>{
        console.log(data);
    },[data])
    return (
        <div className="shopping_cart">
            <div className='cart_table'>
                <div className='cart_table_header'>
                    <div className='cart_table_header_item'>
                        <span>
                            全选&nbsp;
                            <Checkbox
                            onChange={(e)=>setData(data.map(item=>({
                                ...item,
                                status:e.target.checked
                            })))}
                            indeterminate={data.filter(item=>item.status).length>0&&data.filter(item=>item.status).length < data.length}
                            checked={data.length===data.filter(item=>item.status).length && data.length}
                            />
                        </span>
                        <span style={{marginLeft:'147px'}}>商品</span>
                    </div>
                    <div className='cart_table_header_item'>获得积分</div>
                    <div className='cart_table_header_item'>单价{'(rmb)'}</div>
                    <div className='cart_table_header_item'>数量</div>
                    <div className='cart_table_header_item'>小计{'(rmb)'}</div>
                    <div className='cart_table_header_item'>操作</div>
                </div>
                <div className='cart_table_body'>
                    {
                        data.map(item=>{
                            return(
                                <div className='cart_table_body_item'>
                                    <div className='goods_title'>
                                        <Checkbox
                                        checked={item.status}
                                        onChange={e=>setData(data.map(item2=>({
                                            ...item2,
                                            status:item.goodsName===item2.goodsName?e.target.checked:item2.status
                                        })))}
                                        />
                                        <div className='cart_table_body_item_img'>
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div>{item.goodsName}</div>
                                    </div>
                                    <div className='point body_item'>{_.multiply(toPoint(item.price),item.num)}</div>
                                    <div className='price body_item'>{item.price}</div>
                                    <div className="num body_item">
                                        <InputNumber 
                                        onChange={(val)=>{setData(data.map((item2,index)=>{
                                            if(item.goodsName === item2.goodsName){
                                                return {
                                                    ...item2,
                                                    num:val
                                                }
                                            }
                                            return item2
                                        }
                                        ))
                                        }}
                                        min={1}
                                        max={10}
                                        defaultValue={1}/>
                                    </div>
                                    <div className='body_item total'>{_.multiply(item.num,item.price)}</div>
                                    <div className="del body_item" onClick={()=>{setData(data.filter(item2=>item.goodsName!==item2.goodsName))}}>删除</div>
                                </div>
                            )
                        
                        })
                    }
                </div>
            </div>
            <div className='bottom'>
                <div className='price'>
                    <div>
                        <span>商品总价（不含运费）: </span>
                        <span style={{fontSize:'24px'}}>{countTotalPrice(data)}</span>
                    </div>
                </div>
                <div className='point'>
                    <Button type='primary' ghost danger onClick={()=>{setData(data.map(item=>({...item,status:false})))}}>Cancel All</Button>
                    <div>
                        <span>总积分 : </span>
                        <span style={{fontSize:'18px'}}>{_.floor(_.divide(countTotalPrice(data),20))}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ShoppingCart