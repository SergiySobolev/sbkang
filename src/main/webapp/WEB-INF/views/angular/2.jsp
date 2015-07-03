<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="jawr" uri="http://jawr.net/tags"%>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <jawr:script src="/script/all.js" />
  <link rel="stylesheet" type="text/css" media="screen" href="/css/common.css"/>
  <title>Example 2</title>
</head>
<body>
    <div ng-app="invoice2" ng-controller="InvoiceController as invoice">
        <b>Invoice</b>
        <div>
            Quantity: <input type="number" min="0" ng-model="invoice.qty" required />
        </div>
        <div>
            Costs: <input type="number" min="0" ng-model="invoice.cost" required />
            <select ng-model="invoice.inCurr">
                <option ng-repeat="c in invoice.currencies">{{c}}</option>
            </select>
        </div>
        <div>
            <b>Total:</b>
            <span ng-repeat="c in invoice.currencies">
                {{invoice.total(c) | currency:c}}
            </span>
            <button class="btn" ng-click="invoice.pay()">Pay</button>
        </div>
    </div>
</body>
</html>
