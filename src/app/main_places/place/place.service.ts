import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor() { }
  gocernate:any=[
    
    {
      code: "ALL",
      value: "الكل"
    },
    {
        code:"Aswan Governorate",
        value: "أسوان"
    },
    {
        code: "Assiut Governorate",
        value: "أسيوط"
    },
    {
        code: "Luxor Governorate",
        value: "الأقصر"
    },
    {
        code: "Alexandria Governorate",
        value: "الإسكندرية"
    },
    {
        code: "Ismailia Governorate",
        value: "الاسماعيلية"
    },
    {
        code: "Red Sea Governorate",
        value: "البحر الأحمر"
    },
    {
        code: "El Beheira Governorate",
        value: "البحيرة"
    },
    {
        code: "Giza Governorate",
        value: "الجيزة"
    },
    {
        code: "Dakahlia Governorate",
        value: "الدقهلية"
    },
    {
        code: "Suez Governorate",
        value: "السويس"
    },
    {
        code: "Ash Sharqia Governorate",
        value: "الشرقية"
    },
    {
        code: "Gharbia Governorate",
        value: "الغربية"
    },
    {
        code: "Faiyum Governorate",
        value: "الفيوم"
    },
    {
        code: "Cairo Governorate",
        value: "القاهرة"
    },
    {
        code: "Al Qalyubia Governorate",
        value: "القليوبية"
    },
    {
        code: "Menofia Governorate",
        value: "المنوفية"
    },
    {
        code: "Menia Governorate",
        value: "المنيا"
    },
    {
        code: "New Valley Governorate",
        value: "الوادى الجديد"
    },
    {
        code: "Beni Suef Governorate",
        value: "بنى سويف"
    },
    {
        code: "Port Said Governorate",
        value: "بورسعيد"
    },
    {
        code: "South Sinai Governorate",
        value: "جنوب سيناء"
    },
    {
        code: "Damietta Governorate",
        value: "دمياط"
    },
    {
        code: "Sohag Governorate",
        value: "سوهاج"
    },
    {
        code: "North Sinai Governorate",
        value: "شمال سيناء"
    },
    {
        code: "Qena Governorate",
        value: "قنا"
    },
    {
        code: "Kafr El Sheikh Governorate",
        value: "كفر الشيخ"
    },
    {
        code: "Matrouh Governorate",
        value: "مطروح"
    }
  ]
  areas=
    {
      
      ALL:[
        {
          code:"ALL",
          value:"الكل"
        }
      ],
      Aswan_Governorate:
      [
        {
          code:"ALL",
          value:"الكل"
        }
        ,
        {
            code: "Aswan",
            value: "أسوان"
        },
        {
            code: "Edfu",
            value: "إدفو"
        },
        {
            code: "Deraw",
            value: "دراو"
        },
        {
            code: "Kom Ombo",
            value: "كوم امبو"
        },
        {
            code: "Nasr El Nouba",
            value: "نصر النوبة"
        }
    ]
    ,
    Assiut_Governorate:
    [
      {
        code:"ALL",
        value:"الكل"
      }
      ,
      {
          code: "Abanoub",
          value: "أبنوب"
      },
      {
          code: "Abu Tig",
          value: "أبو تيج"
      },
      {
          code: "Asyut",
          value: "أسيوط"
      },
      {
          code: "Al Badari",
          value: "البداري"
      },
      {
          code: "El-Ghanayem",
          value: "الغنايم"
      },
      {
          code: "Al Qusiyyah",
          value: "القوصية"
      },
      {
          code: "Dayrout",
          value: "ديروط"
      },
      {
          code: "Sahel Selim",
          value: "ساحل سليم"
      },
      {
          code: "Sodfa",
          value: "صدفا"
      },
      {
          code: "Markaz El-Fath",
          value: "مركز الفتح"
      },
      {
          code: "Manfalout",
          value: "منفلوط"
      }
  ],
  Luxor_Governorate:
  [
    {
      code:"ALL",
      value:"الكل"
    },
    {
        code: "Arment",
        value: "أرمنت"
    },
    {
        code: "Esna",
        value: "إسنا"
    },
    {
        code: "Luxor",
        value: "الأقصر"
    },
    {
        code: "AZ Zeineyah Bahri",
        value: "الزينيه بحري"
    },
    {
        code: "AZ Zeineyah Qebli",
        value: "الزينيه قبلي"
    },
    {
        code: "At Tod",
        value: "الطود"
    },
    {
        code: "Al Qarnah",
        value: "القرنة"
    },
    {
        code: "Madinet Al Bayadeyah",
        value: "مدينة البياضية"
    }
]
  ,
  Alexandria_Governorate:
  [
    {
      code:"ALL",
      value:"الكل"
    }
    ,
    {
        code: "Alexandria",
        value: "الاسكندرية"
    },
    {
        code: "Al Amereyah",
        value: "الاميرية"
    },
    {
        code: "Ad Dakhilah",
        value: "الدخيلة"
    },
    {
        code: "El-Raml",
        value: "الرمل"
    },
    {
        code: "El Amereya",
        value: "العامرية"
    },
    {
        code: "Al Attarin",
        value: "العطارين"
    },
    {
        code: "El-Labban",
        value: "اللبان"
    },
    {
        code: "El-Mansheya",
        value: "المنشية"
    },
    {
        code: "Bab Sharqi",
        value: "باب شرق"
    },
    {
        code: "El Gomrok District",
        value: "حى الجمرك"
    },
    {
        code: "El Montazah District",
        value: "حى المنتزة"
    },
    {
        code: "Middle Alexandria Section",
        value: "حي وسط"
    },
    {
        code: "Sidi Gaber",
        value: "سيدي جابر"
    },
    {
        code: "Qism El-Mansheya",
        value: "قسم المنشية"
    },
    {
        code: "Karmouz",
        value: "كرموز"
    },
    {
        code: "Moharram Beik",
        value: "محرم بيك"
    },
    {
        code: "Madinet Borg Al Arab",
        value: "مدينة برج العرب"
    },
    {
        code: "Mina El-Basal",
        value: "مينا البصل"
    }
],
Ismailia_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
    
      code: "Abou Sweir",
      value: "ابو صوير"
  },
  {
      code: "Ismailia",
      value: "اسماعيلية"
  },
  {
      code: "At Tall Al Kabir",
      value: "التل الكبير"
  },
  {
      code: "Al Qantarah Gharb",
      value: "القنطرة غرب"
  },
  {
      code: "Al Qantarah Sharq",
      value: "صوامع القنطره شرق"
  },
  {
      code: "Fayed",
      value: "فايد"
  }
],
Red_Sea_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "Red Sea",
      value: "البحر الأحمر"
  },
  {
      code: "Qesm Hurghada",
      value: "الغردقة"
  },
  {
      code: "Qism Ras Ghareb",
      value: "رأس غارب"
  },
  {
      code: "Qesm Safaga",
      value: "سفاجا"
  },
  {
      code: "Qesm Shlatin",
      value: "شلاتين"
  },
  {
      code: "Hala'ib Triangle",
      value: "مثلث حلايب"
  },
  {
      code: "Qesm Marsa Alam",
      value: "مرسى علم"
  }
],
El_Beheira_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "Markaz Abu Al Matamir",
      value: "أبو المطامير"
  },
  {
      code: "Markaz Abu Humus",
      value: "أبو حمص"
  },
  {
      code: "Markaz Edko",
      value: "إدكو"
  },
  {
      code: "Ad Dilingat",
      value: "الدلنجات"
  },
  {
      code: "Markaz AR Rahmaneyah",
      value: "الرحمانية"
  },
  {
      code: "El-Mahmoudeya",
      value: "المحمودية"
  },
  {
      code: "Markaz Itay Al Baroud",
      value: "ايتاى البارود"
  },
  {
      code: "Itay Al Baroud",
      value: "ايتاى البارود"
  },
  {
      code: "Housh Eissa",
      value: "حوش عيسى"
  },
  {
      code: "Qism Damanhour",
      value: "دمنهور"
  },
  {
      code: "Markaz Rasheed",
      value: "رشيد"
  },
  {
      code: "Markaz Shubrakhat",
      value: "شبراخيت"
  },
  {
      code: "Markaz Kafr El-Dawar",
      value: "كفر الدوار"
  },
  {
      code: "Markaz Kom Hamada",
      value: "كوم حمادة"
  },
  {
      code: "Markaz Kom Hamada",
      value: "كوم حماده"
  },
  {
      code: "Menuf",
      value: "منوف"
  },
  {
      code: "Wadi El Natrun",
      value: "وادي النطرون"
  }
],
Giza_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "Abu an Numros",
      value: "أبو النمرس"
  },
  {
      code: "Atfih",
      value: "أطفيح"
  },
  {
      code: "Awsim",
      value: "أوسيم"
  },
  {
      code: "Imbaba",
      value: "إمبابة"
  },
  {
      code: "Al Badrashin",
      value: "البدرشين"
  },
  {
      code: "Al Gazirah Ash Shaqraa",
      value: "الجزيرة الشقراء"
  },
  {
      code: "Giza",
      value: "الجيزة"
  },
  {
      code: "Al Haraneyah",
      value: "الحرانية"
  },
  {
      code: "El-Hawamdeyya",
      value: "الحوامدية"
  },
  {
      code: "Al Motamayez District",
      value: "الحي المتميز"
  },
  {
      code: "Ad Doqi",
      value: "الدقي"
  },
  {
      code: "6th of October",
      value: "السادس من أكتوبر"
  },
  {
      code: "El-Sayeda Zainab",
      value: "السيدة زينب"
  },
  {
      code: "Sheikh Zayed",
      value: "الشيخ زايد"
  },
  {
      code: "El-Saf",
      value: "الصف"
  },
  {
      code: "Al Agouzah",
      value: "العجوزة"
  },
  {
      code: "Al Omraneyah",
      value: "العمرانية"
  },
  {
      code: "Al Ayat",
      value: "العياط"
  },
  {
      code: "Pharonic Village",
      value: "القرية الفرعونية"
  },
  {
      code: "Al Kasabgi",
      value: "القصبجى"
  },
  {
      code: "El Kit Kat",
      value: "الكيت كات"
  },
  {
      code: "Al Markz",
      value: "المركز"
  },
  {
      code: "Industrial Zone",
      value: "المنطقة الصناعية"
  },
  {
      code: "Al Manawat",
      value: "المنوات"
  },
  {
      code: "Al Munib",
      value: "المنيب"
  },
  {
      code: "Al Haram",
      value: "الهرم"
  },
  {
      code: "Al Wahat Al Bahreyah",
      value: "الواحات البحرية"
  },
  {
      code: "Al Warraq",
      value: "الوراق"
  },
  {
      code: "Boulaq Ad Dakrour",
      value: "بولاق الدكرور"
  },
  {
      code: "Tersa",
      value: "ترسا"
  },
  {
      code: "Gazirat Ad Dahab",
      value: "جزيرة الدهب"
  },
  {
      code: "Pyramids Gardens",
      value: "حدائق الاهرام"
  },
  {
      code: "Rabaa",
      value: "رابعة"
  },
  {
      code: "Zawya Abou Muslim",
      value: "زاوية أبو مسلم"
  },
  {
      code: "Saqiyet Mekki",
      value: "ساقية مكى"
  },
  {
      code: "Tamwah",
      value: "طموه"
  },
  {
      code: "Coldair",
      value: "كولدير"
  },
  {
      code: "Al Moneib Axis",
      value: "محور المنيب"
  },
  {
      code: "Manil Shihah",
      value: "منيل شيحة"
  },
  {
      code: "Mit Shammas",
      value: "ميت شماس"
  },
  {
      code: "Mit Qadous",
      value: "ميت قادوس"
  },
  {
      code: "Square",
      value: "ميدان"
  },
  {
      code: "Souk Al Ahad Square",
      value: "ميدان سوق الاحد"
  },
  {
      code: "Nazlet Al Ashtar",
      value: "نزلة الأشطر"
  }
]
,
Dakahlia_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "Aga",
      value: "أجا"
  },
  {
      code: "El-Gamaleya",
      value: "الجمالية"
  },
  {
      code: "El-Senbellawein",
      value: "السنبلاوين"
  },
  {
      code: "Al Manzalah",
      value: "المنزلة"
  },
  {
      code: "Mansoura",
      value: "المنصورة"
  },
  {
      code: "Belkas",
      value: "بلقاس"
  },
  {
      code: "Belqas",
      value: "بلقاس"
  },
  {
      code: "Bani Ebeid",
      value: "بني عبيد"
  },
  {
      code: "Tami Al Amdid",
      value: "تمي الأمديد"
  },
  {
      code: "Dekernes",
      value: "دكرنس"
  },
  {
      code: "Samannoud",
      value: "سمنود"
  },
  {
      code: "Sherbeen",
      value: "شربين"
  },
  {
      code: "Talkha",
      value: "طلخا"
  },
  {
      code: "Mahallat Damanah",
      value: "محلة دمنة"
  },
  {
      code: "Menyet El-Nasr",
      value: "منية النصر"
  },
  {
      code: "Mit Ghamr",
      value: "ميت غمر"
  },
  {
      code: "Nabaruh",
      value: "نبروه"
  }
]
,
Suez_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "EL GANAYEN",
      value: "حى الجناين"
  },
  {
      code: "Suez",
      value: "حى السويس"
  },
  {
      code: "FAISAL District",
      value: "حى فيصل"
  },
  {
      code: "El Arbaeen District",
      value: "حي الأربعين"
  },
  {
      code: "Ataqah",
      value: "حي عتاقة"
  }
]
,
Ash_Sharqia_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "Abou Hammad",
      value: "أبو حماد"
  },
  {
      code: "Awlad Saqr",
      value: "أولاد صقر"
  },
  {
      code: "Abou Hammad",
      value: "ابو حماد"
  },
  {
      code: "Abu Kabir",
      value: "ابو كبير"
  },
  {
      code: "Al Ibrahimeyah",
      value: "الإبراهيمية"
  },
  {
      code: "Alhosania",
      value: "الحسينية"
  },
  {
      code: "Zagazig",
      value: "الزقازيق"
  },
  {
      code: "As Saleheyah Al Gadidah",
      value: "الصالحية الجديدة"
  },
  {
      code: "Al Qorin",
      value: "القرين"
  },
  {
      code: "Al Qenayat",
      value: "القنايات"
  },
  {
      code: "Belbes",
      value: "بلبيس"
  },
  {
      code: "Dairab Negm",
      value: "ديرب نجم"
  },
  {
      code: "Faqus",
      value: "فاقوس"
  },
  {
      code: "Kafr Saqr",
      value: "كفر صقر"
  },
  {
      code: "10th of Ramadan City",
      value: "مدينة العاشر من رمضان"
  },
  {
      code: "Mashtoul as Souq",
      value: "مشتول السوق"
  },
  {
      code: "Minya Al Qamh",
      value: "منيا القمح"
  },
  {
      code: "Hehya",
      value: "ههيا"
  }
]
,
Gharbia_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "As Santah",
      value: "السنطة"
  },
  {
      code: "Al Mahallah Al Kubra",
      value: "المحلة الكبرى"
  },
  {
      code: "Basioun",
      value: "بسيون"
  },
  {
      code: "Zifta",
      value: "زفتى"
  },
  {
      code: "Samannoud",
      value: "سمنود"
  },
  {
      code: "Tanta",
      value: "طنطا"
  },
  {
      code: "Qutur",
      value: "قطور"
  },
  {
      code: "Kafr El-Zayat",
      value: "كفر الزيات"
  }
]
,
Faiyum_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "Ibsheway",
      value: "إبشواي"
  },
  {
      code: "ITSA",
      value: "إطسا"
  },
  {
      code: "Al Fayoum",
      value: "الفيوم"
  },
  {
      code: "Senoures",
      value: "سنورس"
  },
  {
      code: "Tameyah",
      value: "طامية"
  },
  {
      code: "Youssef El Seddik",
      value: "يوسف الصديق"
  }
]
,
Cairo_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "15 May",
      value: "15 مايو"
  },
  {
      code: "Al Azbakeyah",
      value: "الأزبكية"
  },
  {
      code: "El-Basatin",
      value: "البساتين"
  },
  {
      code: "At Tebin",
      value: "التبين"
  },
  {
      code: "El-Gamaleya",
      value: "الجمالية"
  },
  {
      code: "Al Herafieen",
      value: "الحرفيين"
  },
  {
      code: "Al Khosous",
      value: "الخصوص"
  },
  {
      code: "El-Khalifa",
      value: "الخليفة"
  },
  {
      code: "El-Darb El-Ahmar",
      value: "الدرب الأحمر"
  },
  {
      code: "El-Zawya El-Hamraa",
      value: "الزاوية الحمراء"
  },
  {
      code: "Zamalek",
      value: "الزمالك"
  },
  {
      code: "El-Zaytoun",
      value: "الزيتون"
  },
  {
      code: "As Sahel",
      value: "الساحل"
  },
  {
      code: "as Salam",
      value: "السلام"
  },
  {
      code: "El-Sayeda Zainab",
      value: "السيدة زينب"
  },
  {
      code: "Ash Sharabeyah",
      value: "الشرابية"
  },
  {
      code: "El Shorouk City",
      value: "الشروق"
  },
  {
      code: "Al Saleeba",
      value: "الصليبة"
  },
  {
      code: "El-Zaher",
      value: "الظاهر"
  },
  {
      code: "El-Abaseya",
      value: "العباسية"
  },
  {
      code: "New Cairo City",
      value: "القاهرة الجديدة"
  },
  {
      code: "Al Marg",
      value: "المرج"
  },
  {
      code: "Future City",
      value: "المستقبل"
  },
  {
      code: "Al Matareyah",
      value: "المطرية"
  },
  {
      code: "Al Maadi",
      value: "المعادي"
  },
  {
      code: "Al Muqattam",
      value: "المقطم"
  },
  {
      code: "Al Manial",
      value: "المنيل"
  },
  {
      code: "Al Muhandisin",
      value: "المهندسين"
  },
  {
      code: "Al Moski",
      value: "الموسكي"
  },
  {
      code: "El-Nozha",
      value: "النزهة"
  },
  {
      code: "Al Haram",
      value: "الهرم"
  },
  {
      code: "Al Waili",
      value: "الوايلى"
  },
  {
      code: "Bab Ash Shaareyah",
      value: "باب الشعرية"
  },
  {
      code: "Badr City",
      value: "بدر"
  },
  {
      code: "Boulaq Ad Dakrour",
      value: "بولاق الدكرور"
  },
  {
      code: "Hadaeq Al Qubbah",
      value: "حدائق القبة"
  },
  {
      code: "Helwan",
      value: "حلوان"
  },
  {
      code: "Rawd Al Farag",
      value: "روض الفرج"
  },
  {
      code: "Torah",
      value: "طرة"
  },
  {
      code: "Abdeen",
      value: "عابدين"
  },
  {
      code: "Ain Shams",
      value: "عين شمس"
  },
  {
      code: "Qasr an Nile",
      value: "قصر النيل"
  },
  {
      code: "Nasr City",
      value: "مدينة نصر"
  },
  {
      code: "Masr Al Jadidah",
      value: "مصر الجديدة"
  },
  {
      code: "Misr Al Qadimah",
      value: "مصر القديمة"
  },
  {
      code: "Heliopolis",
      value: "هليوبوليس"
  },
  {
      code: "New Heliopolis City",
      value: "هليوبوليس الجديدة"
  }
]
,
Al_Qalyubia_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "Al Khankah",
      value: "الخانكة"
  },
  {
      code: "Al Khosous",
      value: "الخصوص"
  },
  {
      code: "Al Qanater Al Khayreyah",
      value: "القناطر الخيرية"
  },
  {
      code: "Banha",
      value: "بنها"
  },
  {
      code: "Shubra Al Khaymah",
      value: "شبرا الخيمة"
  },
  {
      code: "Shibin Al Qanater",
      value: "شبين القناطر"
  },
  {
      code: "Toukh",
      value: "طوخ"
  },
  {
      code: "Qalyub",
      value: "قليوب"
  },
  {
      code: "Qaha",
      value: "قها"
  },
  {
      code: "Kafr Shukr",
      value: "كفر شكر"
  },
  {
      code: "El Obour City",
      value: "مدينة العبور"
  }
]
,
Menofia_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "Ashmoun",
      value: "اشمون"
  },
  {
      code: "El-Bagour",
      value: "الباجور"
  },
  {
      code: "El-Sadat",
      value: "السادات"
  },
  {
      code: "El-Shohada",
      value: "الشهداء"
  },
  {
      code: "Berkat as Sabee",
      value: "بركة السبع"
  },
  {
      code: "Tala",
      value: "تلا"
  },
  {
      code: "Shibin el-Kom",
      value: "شبين الكوم"
  },
  {
      code: "Shebeen El-Kom",
      value: "شبين الكوم"
  },
  {
      code: "Quwaysna",
      value: "قويسنا"
  },
  {
      code: "Menuf",
      value: "منوف"
  }
]
,
Menia_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "Abu Qurqas",
      value: "أبو قرقاص"
  },
  {
      code: "Al Edwah",
      value: "العدوة"
  },
  {
      code: "Minya",
      value: "المنيا"
  },
  {
      code: "Bani Mazar",
      value: "بني مزار"
  },
  {
      code: "Deir Mawas",
      value: "دير مواس"
  },
  {
      code: "Samalout",
      value: "سمالوط"
  },
  {
      code: "Matay",
      value: "مطاي"
  },
  {
      code: "Maghaghah",
      value: "مغاغة"
  },
  {
      code: "Melawi",
      value: "ملوي"
  }
]
,
New_Valley_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "Kharga",
      value: "الخارجة"
  },
  {
      code: "Al Farafrah",
      value: "الفرافرة"
  },
  {
      code: "Dakhla",
      value: "الواحات الداخلة"
  },
  {
      code: "Baris",
      value: "باريس"
  },
  {
      code: "Toshka Lakes",
      value: "بحيرات توشكى"
  }
]
,
Beni_Suef_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "Ehnasia",
      value: "أهناسيا"
  },
  {
      code: "Al Fashn",
      value: "الفشن"
  },
  {
      code: "Al Wasta",
      value: "الواسطى"
  },
  {
      code: "Beba",
      value: "ببا"
  },
  {
      code: "Bani Sweif",
      value: "بني سويف"
  },
  {
      code: "Samasta",
      value: "سمسطا"
  },
  {
      code: "Nasir",
      value: "ناصر"
  }
]
,
Port_Said_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "El Gamil",
      value: "الجميل"
  },
  {
      code: "Port Fouad",
      value: "بور فؤاد"
  },
  {
      code: "South District",
      value: "حى الجنوب"
  },
  {
      code: "Elzhor District",
      value: "حي الزهور"
  },
  {
      code: "El Sharq District",
      value: "حي الشرق"
  },
  {
      code: "EL DAWAHY DISTRICT",
      value: "حي الضواحي"
  },
  {
      code: "El Manakh",
      value: "حي المناخ"
  },
  {
      code: "Qism El-Arab",
      value: "قسم العرب"
  }
]
,
South_Sinai_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "Abu Zenima",
      value: "أبو زنيمة"
  },
  {
      code: "Abou Sedr",
      value: "ابو سيدر"
  },
  {
      code: "El Tor",
      value: "الطور"
  },
  {
      code: "Jazirat Fira`wn",
      value: "جزيرة فرعون"
  },
  {
      code: "Ras Sedr",
      value: "رأس سدر"
  },
  {
      code: "Ras Abu Rudeis",
      value: "راس أبو رديس"
  },
  {
      code: "St Catherine",
      value: "سانت كاترين"
  },
  {
      code: "Sharm El-Sheikh",
      value: "شرم الشيخ"
  },
  {
      code: "Nuweibaa",
      value: "نويبع"
  }
]
,
Damietta_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "AZ Zarqa",
      value: "الزرقا"
  },
  {
      code: "Damietta",
      value: "دمياط"
  },
  {
      code: "Faraskour",
      value: "فارسكور"
  },
  {
      code: "Kafr Al Battikh",
      value: "كفر البطيخ"
  },
  {
      code: "Kafr Saad",
      value: "كفر سعد"
  }
]
,
Sohag_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "Akhmim",
      value: "أخميم"
  },
  {
      code: "Al Balena",
      value: "البلينا"
  },
  {
      code: "El-Usayrat",
      value: "العسيرات"
  },
  {
      code: "Al Maraghah",
      value: "المراغة"
  },
  {
      code: "Al Monshaah",
      value: "المنشأة"
  },
  {
      code: "Gerga",
      value: "جرجا"
  },
  {
      code: "Geheinah",
      value: "جهينة"
  },
  {
      code: "Dar El-Salam",
      value: "دار السلام"
  },
  {
      code: "Saqetlah",
      value: "ساقلته"
  },
  {
      code: "Sohag",
      value: "سوهاج"
  },
  {
      code: "Tama",
      value: "طما"
  },
  {
      code: "Tahta",
      value: "طهطا"
  }
]
,
North_Sinai_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "Hasna",
      value: "الحسنة"
  },
  {
      code: "Sheikh Zuweid",
      value: "الشيخ زويد"
  },
  {
      code: "Al Arish - Al Hasna",
      value: "العريش"
  },
  {
      code: "Qesm Thaleth Al Arish",
      value: "العريش"
  },
  {
      code: "Arish",
      value: "العريش"
  },
  {
      code: "Al Qosimah",
      value: "القصيمة"
  },
  {
      code: "Qesm Bir Al Abd",
      value: "بئر العبد"
  },
  {
      code: "Qism Rafah",
      value: "رفح"
  },
  {
      code: "Qesm Remanah",
      value: "قسم رمانة"
  },
  {
      code: "Qesm Nakhl",
      value: "نخل"
  }
]
,
Qena_Governorate:

[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "Abu Tesht",
      value: "أبو تشت"
  },
  {
      code: "Al Waqf",
      value: "الوقف"
  },
  {
      code: "Deshna",
      value: "دشنا"
  },
  {
      code: "Farshout",
      value: "فرشوط"
  },
  {
      code: "Qift",
      value: "قفط"
  },
  {
      code: "Qena",
      value: "قنا"
  },
  {
      code: "Qus",
      value: "قوص"
  },
  {
      code: "Nagaa Hammadi",
      value: "نجع حمادي"
  },
  {
      code: "Naqadah",
      value: "نقادة"
  }
]
,
Kafr_El_Sheikh_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "Abu Tamadah",
      value: "ابو تمادة"
  },
  {
      code: "Al Burlos",
      value: "البرلس"
  },
  {
      code: "El Hamoul",
      value: "الحامول"
  },
  {
      code: "El-Reyad",
      value: "الرياض"
  },
  {
      code: "Al Kasaby Ezbet Abou Deraz",
      value: "القصابي-عزبه ابو دراز"
  },
  {
      code: "Banha",
      value: "بنها"
  },
  {
      code: "Biyala",
      value: "بيلا"
  },
  {
      code: "Desouk",
      value: "دسوق"
  },
  {
      code: "Sidi Salem",
      value: "سيدي سالم"
  },
  {
      code: "Fuwwah",
      value: "فوه"
  },
  {
      code: "Qillin",
      value: "قلين"
  },
  {
      code: "Kafr El-Shaikh",
      value: "كفر الشيخ"
  },
  {
      code: "Metobas",
      value: "مطوبس"
  }
]
,
Matrouh_Governorate:
[
  {
    code:"ALL",
    value:"الكل"
  }
  ,
  {
      code: "El Hamam",
      value: "الحمام"
  },
  {
      code: "El Salloum",
      value: "السلوم"
  },
  {
      code: "El Dabaa",
      value: "الضبعة"
  },
  {
      code: "El-Alamein",
      value: "العلمين"
  },
  {
      code: "El Negaila",
      value: "النجيله"
  },
  {
      code: "Sidi Barrani",
      value: "سيدي براني"
  },
  {
      code: "Siwa Oasis",
      value: "سيوة"
  },
  {
      code: "Schally",
      value: "شالي (سيوة القديمة)"
  },
  {
      code: "Ghazala Bay Village",
      value: "قرية خليج غزالة"
  },
  {
      code: "Marsa Matruh",
      value: "مرسى مطروح"
  },
  {
      code: "Qara Oasis",
      value: "واحة القارة"
  }
]












    }
  placeTypes:string[]=['GYM','TENNES','FOOTBALL','BASCKETBALL','SWIMMING','STREETWORKOUT'];
  
}
