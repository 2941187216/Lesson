import React, { useState } from 'react';
import { List, Icon } from 'antd';
const { Item } = List;

const TodoList = ({ todos, onToggleFinished}) => {
    // 删除
    const onDelete = e => {

    }

    return (
       <div className="list-wrap">
           { todos.length === 0?(
               <p>暂无待办事件</p>
           ): (
               <List 
                    itemLayout='horizontal'
                    dataSource={todos}
                    renderItem={({id, text, finished}, idx) => {
                        const itemClasses = classNames({
                            "list-item": true,
                            "list-item__finished": finished
                        })
                        return (
                            //BEM CSS 命名
                            // Block
                            // Element
                            // Modifier
                            <Item className="list-item list-item__finished">
                                {/* img.list-item--avator */}
                            </Item>
                        )
                    }}
               />
           )}
       </div>
    )
}