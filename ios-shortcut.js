var s=document.createElement('script');
s.src='https://yzeeyd.github.io/training-entity-search/app.js?t='+Date.now();
s.onload=function(){
  try {
    if (window.TrainingEntitySearchV5) {
      window.TrainingEntitySearchV5.open();
      completion('تم تشغيل الأداة');
    } else {
      completion('تعذر تشغيل الأداة');
    }
  } catch (e) {
    completion('خطأ: '+e.message);
  }
};
s.onerror=function(){
  completion('تعذر تحميل الأداة');
};
document.documentElement.appendChild(s);