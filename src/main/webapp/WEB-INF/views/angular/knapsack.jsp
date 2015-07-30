<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--<%@ taglib prefix="jawr" uri="http://jawr.net/tags" %>--%>
<html>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%--<jawr:script src="/script/all.js"/>--%>
<script src="/script/lib/angular.js"></script>
<script src="/script/knapsack/knapsackModule.js"></script>
<script src="/script/knapsack/knapsackDirectives.js"></script>
<script src="/script/knapsack/knapsackController.js"></script>
<%--<script type="text/ng-template" id="/inputItem.html">--%>
    <%--<div>--%>
        <%--<input type='number' name='weight'/>--%>
        <%--<input type='number' name='cost'/>--%>
    <%--</div>--%>
<%--</script>--%>

<link rel="stylesheet" type="text/css" media="screen" href="/css/common.css"/>
<title>KnapSack</title>
</head>
<body>
<div ng-app="knapsackModule" ng-controller="knapsackController as knapsack">
  <input type="number" ng-model="knapsack.knapsackCapacity"/>
  <input-item></input-item>
</div>
</body>
</html>
