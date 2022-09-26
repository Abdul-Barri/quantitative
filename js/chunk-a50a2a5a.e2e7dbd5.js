(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-a50a2a5a"],
  {
    "2dd8": function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t["default"] = {
          today: "今天",
          now: "此刻",
          backToToday: "返回今天",
          ok: "確定",
          timeSelect: "選擇時間",
          dateSelect: "選擇日期",
          clear: "清除",
          month: "月",
          year: "年",
          previousMonth: "上個月 (翻頁上鍵)",
          nextMonth: "下個月 (翻頁下鍵)",
          monthSelect: "選擇月份",
          yearSelect: "選擇年份",
          decadeSelect: "選擇年代",
          yearFormat: "YYYY年",
          dayFormat: "D日",
          dateFormat: "YYYY年M月D日",
          dateTimeFormat: "YYYY年M月D日 HH時mm分ss秒",
          previousYear: "上一年 (Control鍵加左方向鍵)",
          nextYear: "下一年 (Control鍵加右方向鍵)",
          previousDecade: "上一年代",
          nextDecade: "下一年代",
          previousCentury: "上一世紀",
          nextCentury: "下一世紀",
        });
    },
    4143: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t["default"] = {
          items_per_page: "條/頁",
          jump_to: "跳至",
          jump_to_confirm: "確定",
          page: "頁",
          prev_page: "上一頁",
          next_page: "下一頁",
          prev_5: "向前 5 頁",
          next_5: "向後 5 頁",
          prev_3: "向前 3 頁",
          next_3: "向後 3 頁",
        });
    },
    "9e70": function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = { placeholder: "請選擇時間" };
      t["default"] = r;
    },
    a37b6: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("a6ec"),
        l = o(r);
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t["default"] = l["default"];
    },
    a6ec: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("41b2"),
        l = c(r),
        o = a("2dd8"),
        u = c(o),
        n = a("9e70"),
        d = c(n);
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i = {
        lang: (0, l["default"])(
          {
            placeholder: "請選擇日期",
            rangePlaceholder: ["開始日期", "結束日期"],
          },
          u["default"]
        ),
        timePickerLocale: (0, l["default"])({}, d["default"]),
      };
      (i.lang.ok = "確 定"), (t["default"] = i);
    },
    ce7d: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("ebf0"),
        l = o(r);
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t["default"] = l["default"];
    },
    ebf0: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("4143"),
        l = f(r),
        o = a("a6ec"),
        u = f(o),
        n = a("9e70"),
        d = f(n),
        c = a("a37b6"),
        i = f(c);
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t["default"] = {
        locale: "zh-tw",
        Pagination: l["default"],
        DatePicker: u["default"],
        TimePicker: d["default"],
        Calendar: i["default"],
        Table: {
          filterTitle: "篩選器",
          filterConfirm: "確定",
          filterReset: "重置",
          selectAll: "全部選取",
          selectInvert: "反向選取",
          sortTitle: "排序",
          expand: "展開行",
          collapse: "關閉行",
        },
        Modal: { okText: "確定", cancelText: "取消", justOkText: "知道了" },
        Popconfirm: { okText: "確定", cancelText: "取消" },
        Transfer: {
          searchPlaceholder: "搜尋資料",
          itemUnit: "項目",
          itemsUnit: "項目",
        },
        Upload: {
          uploading: "正在上傳...",
          removeFile: "刪除檔案",
          uploadError: "上傳失敗",
          previewFile: "檔案預覽",
          downloadFile: "下载文件",
        },
        Empty: { description: "無此資料" },
        PageHeader: { back: "返回" },
      };
    },
  },
]);
