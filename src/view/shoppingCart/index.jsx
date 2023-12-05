import './index.less'
import React, { useState } from 'react'
const ShoppingCart = () => {
    return (
        <div className="shopping_cart">
            <div className='cart_table'>
                <div className='cart_table_header'>
                    <div className='cart_table_header_item'>商品</div>
                    <div className='cart_table_header_item'>获得积分</div>
                    <div className='cart_table_header_item'>单价{'(rmb)'}</div>
                    <div className='cart_table_header_item'>数量</div>
                    <div className='cart_table_header_item'>小计{'(rmb)'}</div>
                    <div className='cart_table_header_item'>操作</div>
                </div>
                <div className='cart_table_body'>
                    <div className='cart_table_body_item'>
                        <div className='goods_title'>
                            <div className='cart_table_body_item_img'>
                                <img src={'image/cat.jpeg'} alt="" />
                            </div>
                            <div>店员懒懒宝一只</div>
                        </div>
                        <div className='point body_item'>1</div>
                        <div className='price body_item'>123</div>
                        <div className="num body_item">123</div>
                        <div className='body_item'>123</div>
                        <div className="del body_item">删除</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShoppingCart