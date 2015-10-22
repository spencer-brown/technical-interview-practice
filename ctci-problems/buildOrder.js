/**
 * You are given a list of projects and a list of dependencies (which is a list of pairs of
 * projects, where the first project is dependent on the second project). All of the project's dependencies
 * must be built before the project is. Find a build order that will allow the projects to be built. If there
 * is no valid build order, return an error.
 */

function calculateBuildOrder(projects, dependencies) {
    var graph = createGraph(projects, dependencies);
    var buildOrder = [];

    for (i = 0; i < projects.length; i++) {
        if (!project[i].added) {
            build(project[i], graph, buildOrder);
        }
    }

    return buildOrder;
}

function createGraph(projects, dependencies) {
    var graph = {};

    // intitialize graph with nodes
    for (i = 0; i < projects.length; i++) {
        graph[projects[i]] = {
            dependencies: [],
            flagged: false,
            added: false
        };
    }

    // add dependencies
    for (i = 0; i < dependencies.length; i++) {
        var dependentProject = dependencies[i][0];
        var dependancy = dependencies[i][1];
        graph[dependentProject].dependencies.push(dependancy);
    }

    return graph;
}

function build(project, graph, buildOrder) {
    // check for circular dependency
    if (graph[project].flagged === true) {
        throw "Circular Dependency Exception";
    }

    graph[project].flagged = true;

    for (i = 0; i < graph[project].dependencies.length; i++) {
        if (!graph[project].added) {
            build(graph[project].dependencies[i]);
        }
    }

    buildOrder.push(project);
    graph[project].flagged = false;
}
