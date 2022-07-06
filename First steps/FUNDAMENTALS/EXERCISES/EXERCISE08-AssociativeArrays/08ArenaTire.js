function arenaTire(input) {

    let heroesObj = {
    };
    for (let i = 0; i < input.length; i++) {
        let line = input[i];
        if (line.includes('Ave Cesar')) {
            break;
        }
        if (line.includes(' -> ')) {

            let [gladiator, technique, skill] = line.split(' -> ');

            if (!heroesObj[gladiator]) {

                heroesObj[gladiator] = {
                    techniques: {
                        [technique]: Number(skill)
                    },
                    skills: Number(skill)
                }
            } else {

                if (heroesObj[gladiator].techniques[technique] && heroesObj[gladiator].techniques[technique] < skill) {
                    heroesObj[gladiator].techniques[technique] = skill;
                    heroesObj[gladiator].skills += Number(skill);
                } else if (!heroesObj[gladiator].techniques[technique]) {
                    heroesObj[gladiator].techniques[technique] = Number(skill);
                    heroesObj[gladiator].skills += Number(skill);
                }
            }
        } else if (line.includes('vs')) {
            let [glad1, glad2] = line.split(' vs ');
            if (heroesObj[glad1] && heroesObj[glad2]) {
                let glad1Techniques = Object.keys(heroesObj[glad1].techniques);
                let glad2Techniques = Object.keys(heroesObj[glad2].techniques);
                let glad1Skill = heroesObj[glad1].skills;
                let glad2Skill = heroesObj[glad2].skills;

                let common = glad1Techniques.filter(tech => glad2Techniques.includes(tech));

                if (common.length > 0) {
                    if (glad1Skill > glad2Skill) {
                        delete heroesObj[glad2];
                    } else if (glad2Skill > glad1Skill) {
                        delete heroesObj[glad1];
                    }
                }
            }
        }
    }

    let sortingGlads = (a, b) => b[1].skills - a[1].skills || a[0].localecompare(b[0]);
    let sortingTechniques = (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]);

    for (let [k, v] of Object.entries(heroesObj).sort(sortingGlads)) {
        console.log(`${k}: ${heroesObj[k].skills} skill`);
        for (let [key, value] of Object.entries(v)) {
            if (key == 'techniques') {
                for (let [k, v] of Object.entries(value).sort(sortingTechniques)) {
                    console.log(`- ${k} <!> ${v}`);
                }
            }
        }

    }
}
    arenaTire([
        'Peter -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
      ])
