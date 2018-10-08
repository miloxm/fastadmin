<?php

namespace app\admin\model;

use think\Model;

class Student extends Model
{
    // 表名
    protected $name = 'student';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    
    // 追加属性
    protected $append = [
        'student_sex_text'
    ];
    

    
    public function getStudentSexList()
    {
        return ['1' => __('男'),'2' => __('女')];
    }     


    public function getStudentSexTextAttr($value, $data)
    {        
        $value = $value ? $value : (isset($data['student_sex']) ? $data['student_sex'] : '');
        $list = $this->getStudentSexList();
        return isset($list[$value]) ? $list[$value] : '';
    }




}
