<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--<%@ taglib prefix="jawr" uri="http://jawr.net/tags" %>--%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="<c:url value="/script/lib/angular.js"/>"></script>
        <script src="<c:url value="/script/knapsack/knapsackModule.js"/>"></script>
        <script src="<c:url value="/script/knapsack/knapsackDirectives.js"/>"></script>
        <script src="<c:url value="/script/knapsack/knapsackService.js"/>"></script>
        <script src="<c:url value="/script/knapsack/knapsackController.js"/>"></script>

        <link rel="stylesheet" type="text/css" media="screen" href="<c:url value="/css/common.css"/>"/>
        <link rel="stylesheet" type="text/css" media="screen" href="<c:url value="/css/bootstrap.min.css"/>"/>
        <title>KnapSack</title>
    </head>
<body  ng-app="knapsackModule">
<div ng-controller="knapsackController as knapsack" class="container">
    <form class="form-horizontal jumbotron" role="form">
        <div class="form-group">
            <label>
                Capacity:
                <input type="number" class="form-control" ng-model="knapsack.capacity"/>
            </label>
        </div>
        <div class="form-group">
            <input-knapsack  items="knapsack.items"></input-knapsack>
        </div>
        <div class="form-group">
            <input type="button" class="btn btn-primary" value="Solution" ng-click="knapsack.solution()"/>
        </div>
        <solution items="knapsack.result" ng-show="knapsack.solutionConstructed()"></solution>
    </form >
</div>
</body>
</html>
