const mongoose = require("mongoose");
const CelebrityModel = require("../model/celebrity");

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(x => {
    console.log(`Connected to Mongo! Database name: "${process.env.MONGO_URI}"`)
    })
    .catch(err => {
    console.error('Error connecting to mongo', err)
    });


    const tests = [
        {
            name: "Albumin Blood Test",
            price: 35,
            description: "An albumin blood test measures the amount of albumin in your blood. Albumin is a protein made by your liver. Albumin helps keep fluid in your bloodstream so it doesn't leak into other tissues. It is also carries various substances throughout your body, including hormones, vitamins, and enzymes. Low albumin levels can indicate a problem with your liver or kidneys.",
            normal_value: "3.4 to 5.4 g/dL"
        },
        {
            name: "Bilirubin in Urine",
            price: 45,
            description: "A bilirubin in urine test measures the levels of bilirubin in your urine. Bilirubin is a yellowish substance made during the body's normal process of breaking down red blood cells. Bilirubin is found in bile, a fluid in your liver that helps you digest food. If your liver is healthy, it will remove most of the bilirubin from your body. If your liver is damaged, bilirubin can leak into the blood and urine. Bilirubin in urine may be a sign of liver disease.",
            normal_value: "0 to 0.3 mg/dL"
        },
        {
            name: "Epithelial Cells in Urine",
            price: 58,
            description: "Epithelial cells are a type of cell that lines the surfaces of your body. They are found on your skin, blood vessels, urinary tract, and organs. An epithelial cells in urine test looks at urine under a microscope to see if the number of your epithelial cells is in the normal range. It's normal to have a small amount of epithelial cells in your urine. A large amount may indicate an infection, kidney disease, or other serious medical condition.",
            normal_value: "one to five squamous epithelial cells per high power field (HPF)"
        },
        {
            name: "Ferritin Blood Test",
            price: 49,
            description: "A ferritin blood test measures the level of ferritin in your blood. Ferritin is a protein that stores iron inside your cells. You need iron to make healthy red blood cells. Red blood cells carry oxygen from your lungs to the rest of your body. Iron is also important for healthy muscles, bone marrow, and organ function. Too little or too much iron in your system can cause serious health problems if not treated.",
            normal_value: "12 to 300 nanograms per milliliter of blood (ng/mL)"
        },
        {
            name: "HIV Screening Test",
            price: 23,
            description: "An HIV test shows whether you are infected with HIV (human immunodeficiency virus). HIV is a virus that attacks and destroys cells in the immune system. These cells protect your body against disease-causing germs, such as bacteria and viruses. If you lose too many immune cells, your body will have trouble fighting off infections and other diseases.",
            normal_value: "less than 0.25"
        },
        {
            name: "Lipase Tests",
            price: 21,
            description: "Lipase is a type of protein made by your pancreas, an organ located near your stomach. Lipase helps your body digest fats. It's normal to have a small amount of lipase in your blood. But, a high level of lipase can mean you have pancreatitis, an inflammation of the pancreas, or another type of pancreas disease. Blood tests are the most common way of measuring lipase.",
            normal_value: "7–60 U/L"
        },
        {
            name: "Phosphate in Blood",
            price: 43,
            description: "A phosphate in blood test measures the amount of phosphate in your blood. Phosphate is an electrically charged particle that contains the mineral phosphorus. Phosphorus works together with the mineral calcium to build strong bones and teeth. Normally, the kidneys filter and remove excess phosphate from the blood. If phosphate levels in your blood are too high or too low, it can be a sign of kidney disease or other serious disorder.",
            normal_value: "2.5 to 4.5 mg/dL"
        },
        {
            name: "Pregnancy Test",
            price: 23,
            description: "A pregnancy test can tell whether you are pregnant by checking for a particular hormone in your urine or blood. The hormone is called human chorionic gonadotropin (HCG). HCG is made in a woman's placenta after a fertilized egg implants in the uterus. It is normally made only during pregnancy. When used correctly, home pregnancy tests are 97–99 percent accurate.  A pregnancy blood test is done in a health care provider's office. It can find smaller amounts of HCG, and can confirm or rule out a pregnancy earlier than a urine test. A blood test can detect pregnancy even before you've missed a period. Pregnancy blood tests are about 99 percent accurate. A blood test is often used to confirm the results of a home pregnancy test.",
            normal_value: "An hCG level above 25 mIU/mL is considered positive for pregnancy."
        },
        {
            name: "Rheumatoid Factor (RF) Test",
            price: 28,
            description: "A rheumatoid factor (RF) test measures the amount of rheumatoid factor (RF) in your blood. Rheumatoid factors are proteins produced by the immune system. Normally, the immune system attacks disease-causing substances like viruses and bacteria. Rheumatoid factors attack healthy joints, glands, or other normal cells by mistake. An RF test is most often used to help diagnose rheumatoid arthritis. Rheumatoid arthritis is a type of autoimmune disorder that causes pain, swelling, and stiffness of the joints. Rheumatoid factors may also be a sign of other autoimmune disorders, such as juvenile arthritis, certain infections, and some types of cancer.",
            normal_value: "less than 14 IU/ml"
        },
        {
            name: "Troponin Test",
            price: 35,
            description: "A troponin test measures the level of troponin in your blood. Troponin is a type of protein found in the muscles of your heart. Troponin isn't normally found in the blood. When heart muscles become damaged, troponin is sent into the bloodstream. As heart damage increases, greater amounts of troponin are released in the blood. High levels of troponin in the blood may mean you are having or recently had a heart attack. A heart attack happens when blood flow to the heart gets blocked. This blockage can be deadly. But quick diagnosis and treatment can save your life.",
            normal_value: "less than 0.04"
        }
    ];


