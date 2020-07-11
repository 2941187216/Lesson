import Mock from 'mockjs'

export default Mock.mock('/myLessons', 'get',{
    success: true,
    'list|5':[
        {
            'id|+1': 1,
            'iamge': "@image('150*100','#FFC0CB','Lesson')",
            'name': '@name',
            "type|1": [
                "专栏",
                "视频课",
                "微课",
                "每日一课"
            ],
            'total|0-100': 100,
            'studied|0-100': 100,
            'finished|0-100': 100
        }
    ]
})