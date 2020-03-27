const medicineItem = [
  {
    id: 2,
    itemName: 'Alernil-m Medicine 120mg ',
    url:
      'https://5.imimg.com/data5/GT/HA/MY-16526614/fexofenadine-120mg-montelucast-10-mg-500x500.jpg',
    price: 9.3,
    information:
      'Alernil-m Medicine 120mg - is an antihistamine pharmaceutical drug used in the treatment of allergy symptoms, such as hay fever and urticaria.',
  },

  {
    id: 3,
    itemName: 'Vitamin C',
    url:
      'data:image/jpeg;base64,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',
    price: 14.0,
    information:
      'Each tablet contains 1000 mg vitamin C in a special tablet development. This slowly releases vitamin C over a period of six to eight hours and supplies the body with the optimum amount of vitamin C over a longer period to to support the bodys own defences and to protect the cells and tissue against oxidative stress.Just one tablet each day reliably nourishes the body with vital vitamin C.',
  },

  {
    id: 10,
    itemName: 'Zucchini Noodles',
    url:
      'https://5.imimg.com/data5/DE/CB/MY-30957396/ventolin-inhaler-500x500.jpg',
    price: 40,
    information:
      'These inhalers help prevent flares and keep symptoms from getting worse. Theyre called control inhalers because they have medicine that controls inflammation.',
  },

  {
    id: 4,
    itemName: 'Amoxicillin',
    url:
      'https://5.imimg.com/data5/YG/CK/MY-1035039/amoxicillin-capsules-500x500.jpg',
    price: 17,
    information:
      'Owing to our rich knowledge and vast experience in this domain, we have been able to offer high quality Amoxicillin Capsules to our valuable customers. These capsules are processed from finest quality ingredients and are used to treat various bacterial infections. Offered capsules undergo different quality assurance checks conducted by our team of quality controllers in order to ensure a zero defect range.',
  },
  {
    id: 5,
    itemName: 'zinc Tablets',
    url:
      'https://images-na.ssl-images-amazon.com/images/I/61wVliMHkhL._AC_SL1500_.jpg',
    price: 44,
    information:
      'Zinc is an essential mineral that plays an important role in many enzymatic functions and it is essential for normal growth and development of the reproductive organs. Zinc is primarily found in the kidneys, liver, pancreas and brain. Zinc is an important component of bodily antioxidant systems.',
  },
  {
    id: 6,
    itemName: 'Vitamin A tablets',
    url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0QCuBoWi0uKWFL72bGvaWmk7srVM3fGYckLHGTQ8KhbjzSRqu',
    information:
      'This Dry Vitamin A is water dispersible and aids in immune‚ skin‚ and eye he',
    price: 18,
  },
  {
    id: 7,
    itemName: 'Diazepam Tablets',
    url:
      'https://www.crescentpharma.com/wp-content/uploads/2016/01/Diazepam-5mg.png',
    price: 19,
    information:
      'Diazepam, first marketed as Valium, is a medicine of the benzodiazepine family that typically produces a calming effect.[6] It is commonly used to treat a range of conditions, including anxiety, seizures, alcohol withdrawal syndrome, benzodiazepine withdrawal syndrome, muscle spasms, trouble sleeping, and restless legs syndrome',
  },
  {
    id: 8,
    itemName: 'Metformin',
    url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDnJW5OmX-lQMAuMh1-EFMECxra4cTGeMo0VvdZ_zv34BOkOhP',
    information:
      'Metformin, marketed under the trade name Glucophage among others, is the first-line medication for the treatment of type 2 diabetes, particularly in people who are overweight. It is also used in the treatment of polycystic ovary syndrome. It',
    price: 88.5,
  },
  {
    id: 9,
    itemName: 'Paracetamol',
    url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRb1dXxkEbGl7DJqvicdwrcbZui3adSz3ctZ0bN9Pw4SW72JEwG',
    information:
      'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
    price: 130.2,
  },
  {
    id: 99,
    itemName: 'Ferrous salt',
    url:
      'https://i1.wp.com/medimoon.com/wp-content/uploads/2012/07/Ferrous-sulphate.jpg?resize=300%2C281',
    information:
      'Ferrous sulphate belongs to the group of medicines termed as iron supplements.  It is a strong acid. Iron is necessary for the production of blood cells. When body is unable to produce required number of blood cells due to deficiency of iron it leads towards a medical condition named as iron deficiency anaemia',
    price: 440.2,
  },
];

export default medicineItem;
