define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'student/student/index',
                    add_url: 'student/student/add',
                    edit_url: 'student/student/edit',
                    del_url: 'student/student/del',
                    multi_url: 'student/student/multi',
                    table: 'student',
                }//方法url对应到controller的函数，可以根据自己需要去controller里重写，这里默认是使用的基类函数
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'student_id',
                sortName: 'student_id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'student_id', title: __('Student_id'),sortable:true},
                        {field: 'student_name', title: __('Student_name'),sortable:true},
                        {field: 'student_sex', title: __('Student_sex'), searchList: {"1":__('男'),"2":__('女')}, formatter: Table.api.formatter.normal,sortable:true},
                        {field: 'student_phone', title: __('Student_phone'),sortable:true},
                        {field: 'student_address', title: __('Student_address'),sortable:true},
                        {field: 'create_time', title: __('Create_time'), operate:'RANGE', addclass:'datetimerange',sortable:true},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});