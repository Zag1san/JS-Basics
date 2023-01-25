function constructionCrew(workerObj) {

    if (workerObj.dizziness === true) {
        workerObj.levelOfHydrated += 0.1 * workerObj.weight * workerObj.experience;
        workerObj.dizziness = false;
        return workerObj;
    } else {
        return workerObj;
    }

}
constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
);
