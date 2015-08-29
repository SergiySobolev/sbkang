<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--<%@ taglib prefix="jawr" uri="http://jawr.net/tags" %>--%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="<c:url value="/script/lib/angular.js"/>"></script>
        <script src="<c:url value="/script/knapsack/knapsackModule.js"/>"></script>
        <script src="<c:url value="/script/knapsack/knapsackDirectives.js"/>"></script>
        <script src="<c:url value="/script/knapsack/knapsackController.js"/>"></script>

        <link rel="stylesheet" type="text/css" media="screen" href="<c:url value="/css/common.css"/>"/>
        <title>KnapSack</title>
    </head>
<body  ng-app="knapsackModule">
<div ng-controller="knapsackController as knapsack">
    <input-knapsack  weights-prices="knapsack.weightsPricesArray">
    </input-knapsack>
    <input type="button" value="solution" ng-click="knapsack.solution()"/>
</div>
</body>
</html>
