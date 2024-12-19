console.groupCollapsed("\n%c  %c考试时钟 ExamClock", "background:url('./favicon.ico') no-repeat;padding:32px;", "font:bold 36px sans-serif;color:#3a9;");
console.log("\n项目仓库：https://github.com/L33Z22L11/ExamClock\n野生技协群：894656456\n\n");
console.groupEnd();
/* 
 * 适用于宝鸡中学的考试科目列表
 */

let specialDate = {
  cee25: parseInt((new Date(2025, 5, 8) - Date.now()) / 864E5),
}

exams["2022-05-14"] = {
  type: "临时考练",
  mainSlogan: `${specialDate.cee22}天后 峰顶相会`,
  schedule() {
    $("考练", today.date, "22:30", "23:30");
  }
};

exams[25] = {
  type: "高三日常",
  author: "招募“高三日常”维护者",
  origin: "2025级年级部",
  mainSlogan: `距离高考${specialDate.cee25}天`,
  rollSlogan: [""],
  earlyAdmit: 2,
  schedule() {
    // 夏季作息时间，上午竟然要上五节课
    // 秋季作息时间竟然也是
    $("晨读1", today.date, "07:05", "07:20");
    $("晨会", today.date, "07:20", "07:25");
    $("晨读2", today.date, "07:25", "07:45");
    $("第1节", today.date, "07:55", "08:35");
    $("第2节", today.date, "08:45", "09:25");
    $("课间操", today.date, "09:25", "09:50", "<a href='https://mp.weixin.qq.com/s/61Voi3s4tFtAup2-eOg1Lg'><i class='fa-regular fa-circle-play'></i> 点击播放高清室内操", ["《鳌拜鳌拜鳌拜拜》(原曲《Batte Forte》)《夜空中最亮的星》《虫儿飞》"]);
    $("第3节", today.date, "09:50", "10:30");
    $("第4节", today.date, "10:40", "11:20");
    $("第5节", today.date, "11:30", "12:10");
    if (today.isSummer) {
      $("第6节", today.date, "14:25", "15:05", null, null, 5);
      $("第7节", today.date, "15:15", "15:55");
      $("第8节", today.date, "16:10", "16:50", null, null, 7);
      $("自习", today.date, "17:00", "18:00");
      $("晚写", today.date, "19:05", "19:15", null, null, 5);
      $("晚一", today.date, "19:15", "19:55");
      $("晚二", today.date, "20:05", "20:45");
      $("晚三", today.date, "21:00", "22:30", null, null, 7);
    } else {
      $("第6节", today.date, "14:10", "14:50", null, null, 5);
      $("第7节", today.date, "15:00", "15:40");
      $("第8节", today.date, "15:55", "16:35", null, null, 7);
      $("自习", today.date, "16:45", "17:45");
      $("晚写", today.date, "18:45", "18:55", null, null, 5);
      $("晚一", today.date, "18:55", "19:35");
      $("晚二", today.date, "19:45", "20:25");
      $("晚三", today.date, "20:40", "22:10", null, null, 7);
      $("晚修", today.date, "22:20", "23:30");
    }
  }
}

exams[251] = {
  type: "高三物理",
  author: "来源:望戈",
  origin: "2025级年级部",
  rollSlogan: ["宝鸡市第一次质量检测：请以实际铃声为准。"],
  schedule() {
    $("语文", "2024-12-20", "09:00", "11:30");
    $("数学", "2024-12-20", "15:00", "17:00");
    $("物理", "2024-12-21", "09:00", "10:15");
    $("外语", "2024-12-21", "15:00", "17:00");
    $("化学", "2024-12-22", "08:30", "09:45");
    $("地理", "2024-12-22", "11:00", "12:15");
    $("政治", "2024-12-22", "14:30", "15:45");
    $("生物", "2024-12-22", "17:00", "18:15");
  }
};

exams[252] = {
  type: "高三历史",
  author: "来源:望戈",
  origin: "2025级年级部",
  rollSlogan: ["宝鸡市第一次质量检测：请以实际铃声为准。"],
  schedule() {
    $("语文", "2024-12-20", "09:00", "11:30");
    $("数学", "2024-12-20", "15:00", "17:00");
    $("历史", "2024-12-21", "09:00", "10:15");
    $("外语", "2024-12-21", "15:00", "17:00");
    $("化学", "2024-12-22", "08:30", "09:45");
    $("地理", "2024-12-22", "11:00", "12:15");
    $("政治", "2024-12-22", "14:30", "15:45");
    $("生物", "2024-12-22", "17:00", "18:15");
  }
};

exams[253] = {
  type: "高三模考",
  author: "",
  origin: "2025级年级部",
  rollSlogan: ["高三第11周合格性模拟考试：请以实际铃声为准。"],
  schedule() {
    $("数学", today.date, "07:30", "09:00");
    $("语文", today.date, "09:20", "10:50");
    $("化/史", today.date, "11:10", "12:10");
    $("外语", today.date, "14:25", "15:55");
    $("政治", today.date, "16:15", "17:15");
    $("物理", today.date, "17:35", "18:35");
  }
};

exams[261] = {
  type: "高二",
  author: "来源:心向太阳",
  origin: "2026届年级部",
  rollSlogan: ["2023级高二第二次月考：请以实际铃声为准。"],
  schedule() {
    $("语文", "2024-12-13", "07:40", "10:10");
    $("地理", "2024-12-13", "10:40", "12:10");
    $("数学", "2024-12-13", "14:10", "16:10");
    $("生物", "2024-12-13", "16:40", "18:10");
    $("英语", "2024-12-14", "08:00", "10:00");
    $("化学", "2024-12-14", "10:30", "12:00");
    $("政治", "2024-12-14", "14:10", "15:40");
    $("物史", "2024-12-14", "16:10", "17:40");
  }
};

exams[27] = {
  type: "高一日常",
  author: "来人维护啊",
  origin: "阳毅@yearnstudio",
  mainSlogan: `以梦为马，不负韶华`,
  rollSlogan: [""],
  schedule() {
    $("晨读1", today.date, "07:05", "07:20");
    $("晨会", today.date, "07:20", "07:25");
    $("晨读2", today.date, "07:25", "07:45");
    $("第1节", today.date, "07:55", "08:35");
    $("第2节", today.date, "08:45", "09:25");
    $("课间操", today.date, "09:25", "09:50", "<a href='https://mp.weixin.qq.com/s/61Voi3s4tFtAup2-eOg1Lg'><i class='fa-regular fa-circle-play'></i> 点击播放高清室内操", ["《鳌拜鳌拜鳌拜拜》(原曲《Batte Forte》)《夜空中最亮的星》《虫儿飞》"]);
    $("第3节", today.date, "09:50", "10:30");
    $("第4节", today.date, "10:40", "11:20");
    $("第5节", today.date, "11:30", "12:10");
    if (today.isSummer) {
      $("第6节", today.date, "14:25", "15:05", null, null, 5);
      $("第7节", today.date, "15:15", "15:55");
      $("第8节", today.date, "16:10", "16:50", null, null, 7);
      $("自习", today.date, "17:00", "18:00");
      $("晚写", today.date, "19:05", "19:15", null, null, 5);
      $("晚一", today.date, "19:15", "19:55");
      $("晚二", today.date, "20:05", "20:45");
      $("晚三", today.date, "21:00", "22:30", null, null, 7);
    } else {
      $("第6节", today.date, "14:10", "14:50", null, null, 5);
      $("第7节", today.date, "15:00", "15:40");
      $("第8节", today.date, "15:55", "16:35", null, null, 7);
      $("自习", today.date, "16:45", "17:45");
      $("晚写", today.date, "18:45", "18:55", null, null, 5);
      $("晚一", today.date, "18:55", "19:35");
      $("晚二", today.date, "19:45", "20:25");
      $("晚三", today.date, "20:40", "22:10", null, null, 7);
      $("晚修", today.date, "22:20", "23:10");
    }
  }
}

exams[271] = {
  type: "高一",
  author: "来源:张老师",
  origin: "2027届年级部",
  rollSlogan: ["高一第一学期月考三：请以实际铃声为准。"],
  schedule() {
    $("语文", "2024-12-13", "08:00", "10:00");
    $("化学", "2024-12-13", "10:30", "12:00");
    $("史政", "2024-12-13", "14:10", "16:10");
    $("生物", "2024-12-13", "16:40", "18:10");
    $("数学", "2024-12-14", "08:00", "09:40");
    $("物理", "2024-12-14", "10:10", "11:40");
    $("英语", "2024-12-14", "14:10", "15:50");
    $("地理", "2024-12-14", "16:20", "17:20");
  }
};

exams[301] = {
  type: "研究生",
  author: "whatever",
  origin: "公共服务",
  rollSlogan: ["研究生初试模拟：公共服务(?type=301)。"],
  schedule() {
    $("上午", today.date, "08:30", "11:30");
    $("下午", today.date, "14:00", "17:00");
  }
};

