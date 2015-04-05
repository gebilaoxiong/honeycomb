/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-28 19:35:17
 * @description
 */

define([
  'infrastructure/view/View',
  'common/view/List/Activity',
  'common/command/RemoveCommand',
  'common/command/AuditCommand',
  'common/command/ConsentCommand',
  'common/command/RejectCommand',
  'common/command/CancelCommand'
], function(
  View, Activity, RemoveCommand,
  AuditCommand, ConsentCommand, RejectCommand,
  CancelCommand
) {

  var ListView;

  /*列表视图*/
  ListView = Q.Class.define(View, {

    type: 'ListView',

    api: undefined,

    cmpEvents: {
      'gridModule': {
        'gridrowactivated': 'onGridRowActivated'
      }
    },

    /*获取活动对象*/
    getActivity: function() {
      var me = this;

      if (!me.activity) {
        me.activity = new Activity({
          api: me.api,
          view: me
        });
      }

      return me.activity;
    },

    /**
     * 行激活事件处理函数
     * @param  {EventObject}    e                   事件对象
     * @param  {Module}         gridModule          表格模块
     * @param  {Record}         record              激活行的record
     */
    onGridRowActivated: function(e, gridModule, record) {
      var me = this;
      me.openDetailPage(String(record.id));
      me.fire('gridrowselected',me, gridModule, record);
    },

    /**
     * 打开明细页面
     * @param  {string|int}     recordID             记录的ID
     */
    openDetailPage: function(recordID) {
      var me = this,
        routeData;

      //明细页面路由数据
      routeData = Q.extend({}, me.getRouteData(), {
        view: 'Detail',
        verb: 'Edit',
        id: recordID
      })

      me.appendPage(routeData);
    },

    /*-----------------------视图操作-----------------------*/

    /*获取选中的记录*/
    getSelectedRecords: function() {
      var gridModule = this.items.get('gridModule');

      return gridModule.hasSelection() ? gridModule.getSelectedRecord() : [];
    },

    /*获取选中记录的ID数组*/
    getSelectedRecordIdArray: function() {
      var idArray,
        records = this.getSelectedRecords();

      //未选中 警告提示信息
      if (!records.length) {
        this.callViewport('alert', {
          type: 'warning',
          message: '没有选择任何数据，请先选择数据！',
          modal: true
        });
        return;
      }

      idArray = [];
      Q.each(records, function(_, item) {
        idArray.push(item.id);
      });

      return idArray;
    },

    /*删除选中记录*/
    removeSelectedRecords: function() {
      var me = this,
        idArray;

      if (!(idArray = me.getSelectedRecordIdArray()) || !idArray.length) {
        return;
      }

      //确认信息
      me.callViewport('confirm', {
        type: 'info',
        message: '请确认是否删除选定的记录？',
        modal: true,
        handler: function(result) {
          if (result !== 'ok') {
            return;
          }
          //执行删除命令
          me.getCommandManager().exec(
            new RemoveCommand(me.getActivity(), {
              idArray: idArray
            }));
        }
      });
    },

    /*将选中记录送审*/
    auditSelectedRecords: function() {
      var me = this,
        idArray;

      if (!(idArray = me.getSelectedRecordIdArray()) || !idArray.length) {
        return;
      }

      //执行送审命令
      me.getCommandManager().exec(
        new AuditCommand(me.getActivity(), {
          idArray: idArray
        }));
    },
    /*撤销送审选中记录*/
    cancelSelectedRecords: function() {
      var me = this,
        idArray;

      if (!(idArray = me.getSelectedRecordIdArray()) || !idArray.length) {
        return;
      }

      //执行送审命令
      me.getCommandManager().exec(
        new CancelCommand(me.getActivity(), {
          idArray: idArray
        }));
    },

    /*批准*/
    consentSelectedRecords: function() {
      var me = this,
        idArray;

      if (!(idArray = me.getSelectedRecordIdArray()) || !idArray.length) {
        return;
      }

      //执行送审命令
      me.getCommandManager().exec(
        new ConsentCommand(me.getActivity(), {
          idArray: idArray
        }));
    },

    /*反审核*/
    rejectSelectedRecords: function() {
      var me = this,
        idArray;

      if (!(idArray = me.getSelectedRecordIdArray()) || !idArray.length) {
        return;
      }

      //执行送审命令
      me.getCommandManager().exec(
        new RejectCommand(me.getActivity(), {
          idArray: idArray
        }));
    },

    /**
     * 撤销上次的操作
     */
    undo: function() {
      this.getCommandManager().undo();
    },

    redo: function() {
      this.getCommandManager.redo();
    },

    /**
     * 刷新
     */
    reload: function() {
      var gridModule;

      if (gridModule = this.items.get('gridModule')) {
        gridModule.reload();
      }
    }
  });

  return ListView;
});