// 假数据 真数据前用一下
import Mock from 'mockjs';

export default Mock.mock('/posts/', 'get',
    {
        success: true,
        title: '正则',
        content: '表达式',
        'list|5-10':[{
            'title': '@title()',
            'email': '@email()',
            'id': '@id',
            'key|+1': 1 
        }]
    }
)
