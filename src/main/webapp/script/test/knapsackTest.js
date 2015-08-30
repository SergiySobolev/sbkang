describe('knapSack module testing', function(){

    var knapSackService;

    beforeEach(function (){

        module('knapsack.service');

        inject(function(_knapsackService_) {
            knapSackService = _knapsackService_;
        });
    });

    it('it should be function', function(){
        expect(angular.isFunction(knapSackService.calcMaxCost)).toBe(true);
    });

    it('should make text exciting', function (){
        var items = [{weight:6,price:5},{weight:4,price:3},{weight:3,price:1},{weight:2,price:3},{weight:5,price:6}];
        var actualKnapsack = knapSackService.calcMaxCost(items, 15);
        var expectedKnapsack = [{weight:5,price:6}, {weight:4,price:3}, {weight:6,price:5}];
        expect(actualKnapsack).toEqual(expectedKnapsack);
    });



});
